import React from 'react';
import Navbar from '../../components/Navbar';
import Emoji from './Emoji';
import Entries from './Entries';

export default function Home(){
    return(
        <div>
            <Navbar/>
            <Emoji/>
            <Entries/>
        </div>
    );
}