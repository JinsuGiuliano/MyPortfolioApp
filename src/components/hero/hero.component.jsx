import React from 'react'


const Hero = () => (

    <div id="home" className="intro route bg-image" style={{backgroundImage: 'url(img/intro-bg.jpg)'}}>
        <div className="overlay-itro" />
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                
                    <h1 className="intro-title mb-4">I am Gustavo Giuliano</h1>
                    <p className="intro-subtitle"><span className="text-slider-items">Web Developer,Web Designer,Mern Stack,React Js,Mongo Db,Node Js,Express Js </span><strong className="text-slider" /></p>
                
                    </div>
                </div>
        </div>
    </div>
)

export default Hero;