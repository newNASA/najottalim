import React from 'react'
import '../styles/style.css'
import logo from '../img/logo.png'

function header() {
    return ( 
        <>
            <header>
                {/* <nav>
                    <div className='left'>
                        <a href='#'>
                            <img src={ logo } alt='logo' />
                        </a>
                    </div>
                    <div className='right'>
                        <a href='#'>Kurslar</a>
                        <a href='#'>Blog</a>
                        <a href='#' className='login'>Kirish</a>
                    </div>
                </nav> */}
                <i></i>
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
                    <a href="#">Kurslarni Ko'rish</a>
                </div>
            </header>
        </>
    );
}

export default header;