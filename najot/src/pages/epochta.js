import React from 'react';
import '../styles/style.css';
import Auth from '../img/auth.png'
import Gg from '../img/download.png'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className='login'>
                <div className='login-left'>
                    <img width={380} src={Auth}/>
                </div>
                <div className='login-right'>
                    <div className='login-in'>
                        <div className='kirish'>Kirish</div>
                        <div className='button'>
                            <Link to={'/kirish'} className='btn1 btnE1 btn'>Telefon raqam orqali</Link>
                            <Link to={'/ePochta'} className='btn2 btnE2 btn'>Elektron pochta orqali</Link>
                        </div>
                        <form action="#" className="register">
                            <label className='tel' htmlFor="tel">E-pochta</label>
                            <input type="tel" className='tel2' id="tel" placeholder="example@najottalim.uz"/>
                            <label className='ali' htmlFor="ali">Parol</label>
                            <input type="password" id="ali" placeholder="Parolingizni kiriting"/>
                        </form>
                        <a href='#'>Parolingizni unutdingizmi?</a>
                        <Link to={'/'} className="sorov-send">Kirish</Link>
                        <button className="sorov-send image-2"> <img width={20} src={Gg}/>Google orqali</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;