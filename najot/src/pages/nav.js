import React from 'react';
import logo from '../img/logo.png'

function Nav() {
    return (
        <header>
            <nav>
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
            </nav>
        </header>
    );
}

export default Nav;