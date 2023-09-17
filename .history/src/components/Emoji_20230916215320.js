import React, { useState } from 'react';
import './emoji.css';
import happy from '../assets/Happy.svg';

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
                    <img src="../assets/what.png"></img>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                        <circle cx="33.5" cy="33.5" r="33.5" fill="#E2E2E2" />
                    </svg> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
  <path d="M14.7344 20.5C15.7958 20.5 16.6562 19.6395 16.6562 18.5781C16.6562 17.5167 15.7958 16.6562 14.7344 16.6562C13.673 16.6562 12.8125 17.5167 12.8125 18.5781C12.8125 19.6395 13.673 20.5 14.7344 20.5Z" fill="black"/>
  <path d="M20.5 23.0625C24.1371 23.0625 27.1961 25.4272 28.1643 28.6544C28.1915 28.7507 28.1957 28.8521 28.1766 28.9504C28.1575 29.0487 28.1156 29.1411 28.0543 29.2203C27.9931 29.2995 27.9141 29.3632 27.8237 29.4064C27.7334 29.4495 27.6342 29.4709 27.5341 29.4688H13.4651C13.3654 29.4702 13.2666 29.4484 13.1768 29.405C13.0869 29.3616 13.0085 29.2978 12.9477 29.2187C12.8868 29.1396 12.8453 29.0474 12.8265 28.9494C12.8076 28.8514 12.8118 28.7504 12.8389 28.6544C13.7991 25.4272 16.8588 23.0625 20.5 23.0625Z" fill="black"/>
  <path d="M26.2656 20.5C27.327 20.5 28.1875 19.6395 28.1875 18.5781C28.1875 17.5167 27.327 16.6562 26.2656 16.6562C25.2042 16.6562 24.3438 17.5167 24.3438 18.5781C24.3438 19.6395 25.2042 20.5 26.2656 20.5Z" fill="black"/>
</svg> */}
                </div>
                <div className="emoji-mood">
                   
                </div>
                <div className="emoji-mood">
                   
                </div>
                <div className="emoji-mood">
                    
                </div>
                <div className="emoji-mood">
                   
                </div>
                <div className="emoji-mood">
                   
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
