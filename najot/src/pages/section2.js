import React, { useState } from 'react';
import '../styles/style.css';
import Help from '../img/help.png'
import Check from '../img/check.svg'
import Close from '../img/close.svg'
function Section2() {
    return (
        <section className='yordam'>
            <div className="ysec1">
                <img src={Help} alt=""/>
            </div>
            <div className="ysec2">
                <div className="yall">
                    <div className="ytext1">Yordam kerakmi?</div>
                    <div className="ytext2">
                        <a href="#">FAQ</a> boʻlimi ham sizga yordam bera olishadi? <br />
                        Telefon raqamingizni yozib qoldiring, biz sizga <br />
                        qoʻngʻiroq qilamiz va biror savolingizga javob beramiz.
                    </div>
                    <form action="#" className="register">
                        <label className='ali' htmlFor="ali">Ismingizni kiriting</label>
                        <input type="text" id="ali" placeholder="Ali" />
                        <label className='tel' htmlFor="tel">Telefon raqamingizni kiriting</label>
                        <input type="tel" id="tel" placeholder="00 000 00 00" />
                    </form>
                    <div className="ytext3">
                        "So‘rov yuborish" tugmasini bosib <br />
                        <a href="#">Platformadan foydalanish qoidalari</a>
                        ga rozilik bildirishingizni tasdiqlaysiz.
                    </div>
                    <button className="sorov-send">So‘rov yuborish</button>
                </div>
            </div>
            <div className='send'>
                <div className='icon-send'><img width={40} src={Check} alt=''/></div>
                <div className='send-text'>
                    <div className='qabul1'>So‘rovingiz qabul qilindi</div>
                    <div className='qabul2'>Operatorlarimiz tez orada siz bilan bog‘lanishadi</div>
                </div>
                <div className='neg'><img width={40}  src={Close} alt=''/></div>
            </div>
        </section>
    );
}

export default Section2;