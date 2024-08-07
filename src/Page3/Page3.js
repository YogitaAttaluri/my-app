import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Page3.css';

// Import images
import image1 from '../assets/f1.jpg';
import image2 from '../assets/f2.jfif';
import image3 from '../assets/f3.jfif';
import image4 from '../assets/f4.jfif';
import image5 from '../assets/f5.jpg';

const Page3 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imagesVisible, setImagesVisible] = useState(false);
    const [animationClass, setAnimationClass] = useState('');
    const navigate = useNavigate(); // Use useNavigate for navigation

    const images = [image1, image2, image3, image4, image5];

    useEffect(() => {
        const handleKeydown = (event) => {
            if (imagesVisible) {
                if (event.key === 'ArrowRight') {
                    setAnimationClass('slide-out-left');
                    setTimeout(() => {
                        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                        setAnimationClass('slide-in-right');
                    }, 500);
                } else if (event.key === 'ArrowLeft') {
                    setAnimationClass('slide-out-right');
                    setTimeout(() => {
                        setCurrentImageIndex((prevIndex) =>
                            prevIndex === 0 ? images.length - 1 : prevIndex - 1
                        );
                        setAnimationClass('slide-in-left');
                    }, 500);
                }
            }
        };

        window.addEventListener('keydown', handleKeydown);

        // Show images after title animation
        const titleAnimationDuration = 2000; // 2 seconds
        setTimeout(() => {
            setImagesVisible(true);
        }, titleAnimationDuration);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [imagesVisible, images.length]);

    // Function to navigate to the next page
    const goToNextPage = () => {
        navigate('../Page4'); // Change '/next-page' to your actual route
    };

    return (
        <div className='page3'>
            <div className='new-title'>
                <span className='new-word'>Dive</span>
                <span className='new-word'>Into</span>
                <span className='new-word'>Fun</span>
            </div>
            {imagesVisible && (
                <div className='image-container'>
                    <img
                        src={images[currentImageIndex]}
                        alt='Slideshow'
                        className={`slideshow-image ${animationClass}`}
                        onAnimationEnd={() => setAnimationClass('')}
                    />
                </div>
            )}
            <button className='next-button' onClick={goToNextPage}>
                Next →
            </button>
        </div>
    );
};

export default Page3;
