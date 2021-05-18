import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <>
            <div className="header">
                <nav className="header__nav">
                    <img src="./my_logo.png" alt="logo" />
                    <Link to="/start" className="header__button">Get Started</Link>
                </nav>
            </div>
            <video autoplay="autoplay" width="100%" muted loop className="myVideo">
                <source src="./2.mp4" type="video/mp4" />
            </video>
                <div className="content">
                    <h1>I Will Never Leave You!</h1>
                    <p>It's an initiative to help our grandpa and grandma never ever forget to take care of themselves. This app will ensure that they take their medicines on time.</p>
                <Link to="/start" className="myBtn">Let's Go!</Link>
                </div>
        </>
    )
}

export default Body;
