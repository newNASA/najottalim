import React, { useState } from 'react';
import '../styles/style.css';
import Afzalliklar from '../json/afzalliklar.json'
import BottomArrow from '../img/arrowbottom.png'

function Advantages() {

    const [isActive, setIsActive] = useState(false)
    const clicksend = () => {
        setIsActive(!isActive)
    }
    const style = {
        height: isActive ? '700px' : ''
    }
    const iconStyle = {
        transition: '1s',
        transform: isActive ? 'rotate(180deg)' : ''
    }

    return (
        <div className='afzalliklar'>
            <div className='afzalliklar-top'>
                <h1>Bizning afzalliklarimiz</h1>
            </div>
            <div className='afzalliklar-center' style={style}>
                {Afzalliklar.map((post) => (
                    <div className='afzalliklar-card' key={post.id}>
                        <div className='card-left'>
                            <img src={post.icon} alt={post.title} />
                        </div>
                        <div className='card-right'>
                            <p className='title'>{post.title}</p>
                            <p className='text'>{post.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='afzalliklar-bottom'>
                <div className='alotof' onClick={clicksend}>
                    <label>Ko'proq</label>
                    <img src={BottomArrow} alt='Bottom Arrow' style={iconStyle} />
                </div>
            </div>
        </div>
    );
}

export default Advantages;
