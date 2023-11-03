import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import {aboutInfo} from '../constants/pageInformation';

export default function News() {

    return(
        <>
            <h1>Coming Soon...</h1>
            <ul>
                <Link to='/about'>About</Link>
            </ul>
        </>
    );

}