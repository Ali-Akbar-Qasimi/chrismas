import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <section className='hero'>
            <div className="hero-content">
                <div className="hero-content-text">
                    If you can't decide what
                    to do in 2023, we can 
                    gift you some ideas
                </div>
                <button className="hero-content-button">
                    <Link to="/gift">SEE GIFT</Link>
                </button>
            </div>
        </section>
    )
}

export default Hero