import React from 'react';
import './Mainpage.css';
import Videodata from '../assets/Video.mp4'
import { Link } from 'react-router-dom';

const Mainpage = () => {
    return (
        <>
            <div className='video-background'>
                <video autoPlay loop muted>
                    <source src={Videodata} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='overlay-content'>
                    <h1>Optimizing Wastewater Operations</h1>
                    <div className='button-container'>
                        <Link to="../Page1">
                            <button>Overview</button>
                        </Link>
                        <Link to="../Page2">
                            <button>Data Analysis and Coding</button>
                        </Link>
                        <Link to="../Page3">
                            <button>Fun Activities</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mainpage;
