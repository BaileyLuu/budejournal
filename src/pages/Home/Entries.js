import React, {useState} from 'react';
import './entries.css';

export default function Entries(){
    return (
        <>
        <h2>Most recent entries</h2>
        <div className="entries-container">
            <div className="entry-date">Fri 15</div>
            <div className="entry-grateful">
                <span><strong>I'M GRATEFUL FOR</strong></span><br></br>
                <span>Friends that care about me</span><br></br>
                <span><strong>I LOOK FORWARD TO</strong></span><br></br>
                <span>Seeing my dog after work tomorrow</span><br></br>
            </div>
        </div>
        <div className="entries-container">
            <div className="entry-date">Thu 14</div>
            <div className="entry-grateful">
            <span><strong>I'M GRATEFUL FOR</strong></span><br></br>
                <span>The person who asked about my day</span><br></br>
                <span><strong>I LOOK FORWARD TO</strong></span><br></br>
                <span>Getting some rest</span><br></br>
            </div>
        </div>
        <div className="entries-container">
            <div className="entry-date">Wed 13</div>
            <div className="entry-grateful">
            <span><strong>I'M GRATEFUL FOR</strong></span><br></br>
                <span>My mom checking in on me</span><br></br>
                <span><strong>I LOOK FORWARD TO</strong></span><br></br>
                <span>Trying out a recipe tomorrow</span><br></br>
            </div>
        </div>

        </>
    );
}
