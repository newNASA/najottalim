import React from 'react';
import notfound from '../img/404.webp'
import Footer from "./footer";
import { Outlet, Link } from 'react-router-dom';
function Notfound() {
    return (
        <>
            <div className='notfound'>  
                <img src={notfound} />
                <p>Bu sahifa topilmadi! Bosh sahifaga qayting.</p>
                <Link to='/'>Bosh Sahifaga Qaytish</Link>
            </div>
            < Footer/>
        </>
    );
}

export default Notfound;