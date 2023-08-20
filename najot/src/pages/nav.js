import React from 'react';
import logo from '../img/logo.png'
import { Outlet, Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav>
                <div className='left'>
                    <Link to='/'>
                        <img src={ logo } alt='logo' />
                    </Link>
                </div>
                <div className='right'>
                    <Link to='/kurslar'>Kurslar</Link>
                    <Link to='/bloglar'>Blog</Link>
                    <Link to='/kirish' className='login'>Kirish</Link>
                </div>
            </nav>
            <i></i>
            <Outlet />
        </>
    );
}

export default Nav;