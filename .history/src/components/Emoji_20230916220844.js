import React, { useState } from 'react';
import './emoji.css';
import happy from '../assets/Happy.svg';
import surprised from '../assets/Surprised.svg';
import sad from '../assets/Sad.svg';
import smiling from '../assets/Smiling.png';

export default function Emoji() {
    return (
        <>
            <div className="emojiBG">
                <div className="emoji-period">
                    <div className="period">Weekly</div>
                    <div className="period">Monthly</div>
                    <div className='period'>Yearly</div>
                    
                </div>
                <div className="emoji-mood">
                    <img src={surprised}></img>
                </div>
                <div className="emoji-mood">
                    <img src={happy}></img>
                </div>
                <div className="emoji-mood">
                    <img src={sad}></img>
                </div>
                <div className="emoji-mood">
                    <img src={smiling}></img>
                </div>
                <div className="emoji-mood">
                    <img src={surprised}></img>
        
                </div>
                <div className="emoji-mood">
                    <img src={smiling}></img>
                </div>

                {/* <div className="mood-weekly">
                    <div className="mood">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                            <circle cx="33.5" cy="33.5" r="33.5" fill="#E2E2E2" />
                        
                        </svg>
                        
                    </div>
                </div> */}

            </div>

        </>

    );
}
