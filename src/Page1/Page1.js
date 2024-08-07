import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page1.css';
import codeMigrationImage from '../assets/python.png';
import dataAnalysisImage from '../assets/image2.png';
import pcaAnalysisImage from '../assets/image3.png';
import pythonWorkshopImage from '../assets/image4.png';

const timelineData = [
    {
        id: 1,
        title: 'Code Migration',
        image: codeMigrationImage
    },
    {
        id: 2,
        title: 'Data Analysis and Dashboard Creation',
        image: dataAnalysisImage
    },
    {
        id: 3,
        title: 'PCA Analysis',
        image: pcaAnalysisImage
    },
    {
        id: 4,
        title: 'Python Workshop for Data Analysis',
        image: pythonWorkshopImage
    },
];

const Page1 = () => {
    const navigate = useNavigate(); // Hook for navigation

    const timelineContainerRef = useRef();

    useEffect(() => {
        const timelineItems = timelineContainerRef.current.querySelectorAll('.timeline-item');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('show');
                        }, index * 500 + 3000); // Stagger animation by 500ms after initial delay
                    }
                });
            },
            { threshold: 0.1 }
        );

        timelineItems.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const handleNextClick = () => {
        navigate('../Page2'); // Replace '/next-page' with your desired route
    };

    return (
        <div className="Overview">
            <div className="header">
                <div className="header-word" style={{ animationDelay: '0s' }}>Transforming</div>
                <div className="header-word" style={{ animationDelay: '0.5s' }}>Data</div>
                <div className="header-word" style={{ animationDelay: '1s' }}>into</div>
                <div className="header-word" style={{ animationDelay: '1.5s' }}>Insights</div>
            </div>
            <div className="timeline-container" ref={timelineContainerRef}>
                {timelineData.map((event, index) => (
                    <div
                        key={event.id}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="circle-connector">
                            <div className="outer-circle">
                                <div className="inner-circle"></div>
                            </div>
                        </div>
                        <div className="content">
                            <img src={event.image} alt={event.title} className="timeline-image" />
                            <h2>{event.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <button className="next-button" onClick={handleNextClick}>
                Next &rarr;
            </button>
        </div>
    );
};

export default Page1;
