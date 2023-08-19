import React, { useState, useRef } from 'react';
import Comments from '../json/comments.json';
import play from '../img/play.png'

function CommentsComponent() {
    const [videoStates, setVideoStates] = useState(Comments.map(() => false));
    const videoRefs = useRef(Comments.map(() => React.createRef()));

    const togglePlay = (index) => {
        const newStates = [...videoStates];
        newStates[index] = !newStates[index];
        setVideoStates(newStates);

        const video = videoRefs.current[index].current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    return (
        <div className='comments'>
            <div className='comments-top'>
                <h1>Bitiruvchilarimizdan izohlar</h1>
                <p>Oʻquv kurslarimiz, ustozlar, qoʻlga kiritilgan bilim va koʻnikmalar, olingan natijalar haqida bitiruvchilarimizdan eshiting hamda ulardan kerakli tavsiyalar oling.</p>
            </div>
            <div className='comments-bottom'>
                {Comments.map((post, index) => (
                    <div className='comments-cards' key={post.id}>
                        <video src={post.video} ref={videoRefs.current[index]}>
                        </video>
                        <span className='play' onClick={() => togglePlay(index)}>
                            <button className='play-button'>
                                <img src={play}></img>
                            </button>
                        </span>
                            <div className='info'>
                                <p className='date'>{post.date}</p>
                                <p className='job'>{post.job}</p>
                                <p className='name'>{post.name}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentsComponent;
