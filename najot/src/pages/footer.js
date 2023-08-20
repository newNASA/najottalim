import React from 'react';
import '../styles/style.css';
import Najot from '../img/najot.svg'
function Footer() {
    return (
        <footer>
            <div className='asos'>
                <div className='asos1'>
                    <div className='head-icon'><img src={Najot} alt='' /></div>
                    <div className='head-text1'>
                        Onlayn platformaga tegishli barcha <br />
                        materiallar "NAJOT TA‘LIM MARKAZI"<br />
                        MCHJning mulki hisoblanadi. Ushbu<br />
                        materiallardan onlayn ta‘lim olishdan<br />
                        tashqari nusxa ko‘chirish, tarqatish va<br />
                        boshqa maqsadlarda foydalanish<br />
                        qonunan man etiladi.
                    </div>
                </div>
                <div className='ahead'>
                    <div className='ahead1'>
                        <div className='asos2'>
                            <div className='malumot'>Ma'lumotlar</div>
                            <div className='links2'>
                                <a href='#'>FAQ</a>
                                <a href='#'>Blog</a>
                                <a href='#'>Ommaviy oferta</a>
                            </div>
                        </div>
                        <div className='asos3'>
                            <div className='malumot'>Ommabop Kurslar</div>
                            <div className='links2'>
                                <a href='#'>SMM onlayn</a>
                                <a href='#'>Social Media Design</a>
                                <a href='#'>Dasturlash foundation</a>
                                <a href='#'>Adobe Illustrator</a>
                            </div>
                        </div>
                        <div className='asos4'>
                            <div className='malumot'>Bizning Loyihalar</div>
                            <div className='links2'>
                                <a href='#'>Osmondagi bolalar</a>
                                <a href='#'>0 dan 1 gacha</a>
                                <a href='#'>Abutech</a>
                                <a href='#'>Alohida mavzu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='connect'>
                <div className='con1'>
                    <div className='asos1'>
                        © Najot Ta'lim, 2023 <br />
                        Barcha huquqlar himoyalangan.
                    </div>
                    <div className='asos2'>
                        Toshkent shahri, Chilonzor-9,<br /> Qatortol ko‘chasi<br />
                        <span>Mo‘ljal: Rayhon milliy taomlari qarshi<br /> tomoni, 1- va 2-uylar orqa tomoni.</span>
                    </div>
                    <div className='asos3'>Tarmoqlar:</div>
                    <div className='asos4'>
                        Telefon raqami:<br />
                        <span>+998 (78) 888 9 888</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
