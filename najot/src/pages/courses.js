import React from 'react';
import Courses from '../json/courses.json'
import { Link } from 'react-router-dom';

function courses() {
    return (
        <div className='courses'>
            <div className='courses-top'>
                <h1>Yo‘nalishlar bo‘yicha kurslar</h1>
                <p>Zamonaviy sohalardan birini o‘rganing va talabgir kasb egasi bo‘ling!</p>
            </div>
            <div className='courses-center'>
                {Courses.map((post) => {
                    return(
                        <a href='#' className='courses-cards'>
                            <p className='title'>{post.title}</p>
                            <p className='text'>{post.text}...</p>
                        </a>
                    )
                }) }
            </div>
            <div className='courses-bottom'>
                <Link to='/kurslar'>Barcha kurslarni ko‘rish</Link>
            </div>
        </div>
    );
}

export default courses;