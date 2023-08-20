import React from 'react'
import '../styles/style.css'
import Courses from './courses'
import Ourgraduate from './ourgraduate'
import Comments from './comments'
import Section2 from "./section2"
import Footer from "./footer";
import Advantages from './advantages'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

function Header() {

    return ( 
        <>
            <header>
                <div className='headerLeft'>
                    <div className='text'>
                        <h1 className='jobs'>Kasblarni</h1>
                        <div className='animationText'>
                            <h1 className='h1'>"Najot Talim" <span>da</span></h1>
                            <h1 className='h2'>mutaxassislardan</h1>
                            <h1 className='h3'>onlayn</h1>
                            <h1 className='h4'>istalgan nuqatadan</h1>
                        </div>
                        <h1 className='lissen'>O'rganing</h1>
                        <p>O‘zingizga qulay vaqtda, joyda va uslubda <br/> zamonaviy kasblarni o‘rganing.</p>
                    </div>
                    <Link to="/kurslar">Kurslarni Ko'rish</Link>``
                </div>
            </header>
            <Advantages />
            <Courses />
            <Ourgraduate />
            <Comments />
            <Section2/>
            <Footer/>
        </>
    );
}

export default Header;