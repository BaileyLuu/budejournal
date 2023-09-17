import React, {useState} from 'react';
import './entries.css';

export default function Entries(){
    return (
        <div className="entries-container">
            <div className="entry-date">Fri 15</div>
            <div className="entry-grateful">
                <span>I'M GRATEFUL FOR</span><br></br>
                <span>Friends that care about me</span><br></br>
                <span>I LOOK FORWARD TO</span><br></br>
                <span>Seeing my dog after work tomorrow</span><br></br>
               
            </div>
            
        </div>
    );
}
