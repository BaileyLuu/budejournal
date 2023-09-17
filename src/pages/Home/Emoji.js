import React, { useState } from 'react';
import './emoji.css';
import happy from '../../assets/Happy.svg';
import surprised from '../../assets/Surprised.svg';
import sad from '../../assets/Sad.svg';
import smiling from '../../assets/Smiling.svg';
import neutral from '../../assets/Neutral.svg';

export default function Emoji() {
    return (
        <div className="emoji-area">
            <div className="emoji-period">
                <div className="period">Weekly</div>
                <div className="period">Monthly</div>
                <div className='period'>Yearly</div>
            </div>
            <div className='emoji-container'>
                <div className='emoji-daytime'>
                    {/* <div className='emoji-daytime-wrapper'>
                        
                    </div> */}
                </div>
                <div className="emoji-mood">
                    <img alt="surprised" className="img1" src={surprised}></img>
                    <img alt="neutral" className="img2" src={neutral}></img>
                </div>
                <div className="emoji-mood">
                    <img alt="happy" className="img1" src={happy}></img>
                    <img alt="happy" className="img2" src={happy}></img>
                </div>
                <div className="emoji-mood">
                    <img alt="sad" className="img1" src={sad}></img>
                    <img alt="smiling" className="img2" src={smiling}></img>
                </div>
                <div className="emoji-mood">
                    <img alt="smiling" className="img1" src={smiling}></img>
                    <img alt="neutral" className="img2" src={neutral}></img>
                </div>
                <div className="emoji-mood">
                    <img alt="surprised" className="img1" src={surprised}></img>
                    <img alt="neutral" className="img2" src={neutral}></img>
        
                </div>
                <div className="emoji-mood">
                    <img alt="smiling" className="img1" src={smiling}></img>
                    <img alt="happy" className="img2" src={happy}></img>
                </div>
            </div>
           
        </div>
    );
}
