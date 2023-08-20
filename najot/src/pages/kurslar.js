import React, { useState } from 'react';
import "../styles/style.css";
import Courses from '../json/allcourses.json';
import arrow from '../img/arrow.png';
import search from '../img/search.png';
import { Link } from 'react-router-dom';
import Footer from './footer';

function Kurslar( onSearch ) {
    const [filter, setFilter] = useState('Barchasi');
    const filteredCourses = Courses.filter(course => filter === 'Barchasi' || course.mark === filter);

    const getBackgroundColor = (mark) => {
        if (mark === 'Marketing') {
            return 'rgb(14, 177, 130)';
        } else if (mark === 'Dasturlash' || mark === 'Boshqa') {
            return 'rgb(0, 0, 0)';
        } else if (mark === 'Dizayn') {
            return 'rgb(174, 141, 94)';
        }
        return 'transparent';
    };
    const getButtonBackgroundColor = (buttonFilter) => {
        if (buttonFilter === filter) {
            const btnstyle = {
                backgroundColor: "#ba8d5b",
                fontWeight: "700",
                color:"white"
            }
            return btnstyle;
        }
    };



    return (
        <>
        <div className='kurslar'>
            <div className='links'>
                <p>
                    <Link to="/" className='index'>Bosh sahifa</Link>
                    <img src={arrow} alt="Chiziq" />
                    <Link to='/kurslar' className='kurs'>Kurslar</Link>
                </p>
            </div>
            <div className='allcourses'>
                <div className='all-top'>
                    <div className='top'>
                        <h1>Barcha o‘quv kurslari</h1>
                        <from>
                            <label className='searchBar'>
                                <input type='text' placeholder='Izlash'></input>
                                <img src={search} alt="Izlash" />
                            </label>
                        </from>
                    </div>
                    <div className='bottom'>
                        <button
                            onClick={() => setFilter('Barchasi')}
                            style={ getButtonBackgroundColor('Barchasi') }
                        >
                            Barchasi
                        </button>
                        <button
                            onClick={() => setFilter('Dizayn')}
                            style={ getButtonBackgroundColor('Dizayn') }
                        >
                            Dizayn
                        </button>
                        <button
                            onClick={() => setFilter('Marketing')}
                            style={   getButtonBackgroundColor('Marketing') }
                        >
                            Marketing
                        </button>
                        <button
                            onClick={() => setFilter('Boshqa')}
                            style={  getButtonBackgroundColor('Boshqa') }
                        >
                            Boshqa
                        </button>
                        <button
                            onClick={() => setFilter('Dasturlash')}
                            style={  getButtonBackgroundColor('Dasturlash') }
                        >
                            Dasturlash
                        </button>
                    </div>
                </div>
                <div className='all-bottom'>
                    {filteredCourses.map((course) => (
                        <a
                            href='#'
                            className='all-cards'
                            key={course.title}
                        >
                            <div className='left'>
                                <span style={{ backgroundColor: getBackgroundColor(course.mark) }}>{course.mark}</span>
                                <h2>{course.title}</h2>
                                <p>{course.text}</p>
                            </div>
                            <div className='right'>
                                <img src={course.img} alt={course.title}></img>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Kurslar;
