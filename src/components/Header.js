import React from 'react';
import '../App.css';
import { ApplyButton } from './Button';
import './Header.css';

function Header() {
    return (
        <div className='header-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Centre for Open and Distance Learning<br />(CODL)</h1>
            <h3>Bachelor of Arts Degree Program</h3>
            
            <div className='header-btns'>
                <ApplyButton className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    APPLY ONLINE
                </ApplyButton>
                <ApplyButton className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    OUR UNIVERSITY <i className='far fa-play-circle' />
                </ApplyButton>
            </div>
        </div>
    )
}

export default Header;