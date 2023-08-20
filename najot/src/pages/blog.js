import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import Blogs from '../json/blogs.json'
import '../styles/style.css'
import arrow from '../img/arrow.png';
import eye from '../img/eye.png';
import Footer from './footer';


function Blog() {

    const [filter, setFilter] = useState('Barchasi');    
    const filteredBlogs = Blogs.filter(Blog => filter === 'Barchasi' || Blog.mark === filter);

    const getButtonBackgroundColor = (buttonFilter) => {
        if (buttonFilter === filter) {
            const btnstyle = {
                backgroundColor: "#ba8d5b",
                fontWeight: "600",
                color:"white"
            }
            return btnstyle;
        }
    };

    return (
        <div>
            <div className='blogs'>
                <div className='links'>
                    <p>
                        <Link to="/" className='index'>Bosh sahifa</Link>
                        <img src={arrow} alt="Chiziq" />
                        <Link to='/bloglar' className='kurs'>Bloglar</Link>
                    </p>
                </div>
                <div className='allblogs'>
                    <div className='all-top'>
                        <div className='top'>
                            <h1>Barcha o‘quv kurslari</h1>
                        </div>
                        <div className='bottom'>
                            <button
                                onClick={() => setFilter('Barchasi')}
                                style={getButtonBackgroundColor('Barchasi')}
                            >
                                Barchasi
                            </button>
                            <button
                                onClick={() => setFilter('Bitiruv marosimi')}
                                style={getButtonBackgroundColor('Bitiruv marosimi')}
                            >
                                Bitiruv marosimi
                            </button>
                            <button
                                onClick={() => setFilter('Master-klass')}
                                style={getButtonBackgroundColor('Master-klass')}
                            >
                                Master-klass
                            </button>
                            <button
                                onClick={() => setFilter('Musobaqa')}
                                style={getButtonBackgroundColor('Musobaqa')}
                            >
                                Musobaqa
                            </button>
                            <button
                                onClick={() => setFilter('Dasturlash')}
                                style={getButtonBackgroundColor('Dasturlash')}
                            >
                                Dasturlash
                            </button>
                            <button
                                onClick={() => setFilter('Najot Quiz')}
                                style={getButtonBackgroundColor('Najot Quiz')}
                            >
                                Najot Quiz
                            </button>
                        </div>
                    </div>
                    <div className='all-center'>
                        {filteredBlogs.map((post) => {
                            return(
                                <div className='blogs-card'>
                                    <div className='top'>
                                        <span>{post.mark}</span>
                                        <img src={post.img}></img>  
                                    </div>
                                    <div className='bottom'>
                                        <h6>{post.date}</h6>
                                        <h6 className='h6'>{post.view}</h6>
                                        <img src={eye}></img>
                                        <h3>{post.title}...</h3>
                                        <p>{post.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;