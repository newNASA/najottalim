import React from 'react';
import Ourgraduate from '../json/ourgraduates.json'

function ourgraduate() {
    return (
        <div className='ourgraduate'>
            <div className='our-top'>
                <h1>Bitiruvchilarimizning ish joylari:</h1>
                <p>Eng yaxshi bitiruvchilarimiz nufuzli tashkilot va kompaniyalarda faoliyat yuritadi. Zamonaviy kasb egalariga doim va har yerda talab yuqori bo‘ladi.</p>
            </div>
            <div className='our-bottom'>
                {Ourgraduate.map((post) => {
                    return(
                        <div className='our-cards'>
                            <img src={post.img}></img>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ourgraduate;