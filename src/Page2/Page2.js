import React, { useEffect, useRef } from 'react';
import './Page2.css';
import { useNavigate } from 'react-router-dom';

// Import images
import image1 from '../assets/image5.png';
import image2 from '../assets/image6.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const Page2 = () => {
    const cardRefs = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        ref.classList.add('visible');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const cardData = [
        {
            image: image1,
            title: 'Transforming Efficiency at Lightning Speed',
            description:
                'The optimization of the floc morphology analysis code significantly enhanced operational efficiency and decision-making in wastewater treatment. By identifying and addressing bottlenecks in the existing code, we implemented advanced techniques such as algorithm refinement, efficient data structures, parallel processing, and vectorization. These improvements reduced processing time from 8 hours to just 1 minute, enabling more frequent and timely analyses. This rapid processing allows for swift, data-driven adjustments to treatment processes, improving decision-making capabilities and reducing resource consumption. The optimized code empowers DC Water to manage sludge treatment more effectively, ensuring efficient wastewater management.',
        },
        {
            image: image2,
            title: 'Crafting Data-Driven Dashboards for Impact',
            description:
                'The project aimed to enhance dewatering efficiency by analyzing dissolved oxygen (DO) and BFP polymer data and developing interactive dashboards for visualization. Using tools like Python, I created dynamic visualizations that allowed stakeholders to easily monitor critical metrics, enabling more informed decision-making. Additionally, I optimized the TS data model to improve data extraction and interpretation, ensuring a seamless flow of accurate information. This holistic approach facilitated a better understanding of process dynamics, supporting continuous optimization and operational enhancements through actionable insights.',
        },
        {
            image: image3,
            title: 'Simplifying Complexity',
            description:
                'Applying Principal Component Analysis (PCA) to Process Control System (PCS) data helped streamline complex wastewater treatment processes by reducing dimensionality and identifying key variables. This approach highlighted the most influential factors impacting treatment efficiency, enabling more targeted improvements and optimization. The insights gained from PCA allowed for better decision-making and resource allocation, ultimately enhancing process control and aligning with strategic goals of resilience and reliability.',
        },
        {
            image: image4,
            title: 'Elevating Data Analysis Skills',
            description:
                'The Python workshop empowered the Wastewater Operations department by teaching essential data analysis skills using tools like Pandas and Matplotlib. Participants learned to efficiently manipulate and visualize data, enabling them to uncover insights and make informed decisions. This training fostered a culture of continuous improvement, encouraging team members to leverage data effectively for process optimization and innovation.',
        },
    ];

    const handleNextClick = () => {
        navigate('../Page3');
    };

    return (
        <div className='page2'>
            <div className='title'>
                <span className='word'>Data</span>
                <span className='word'>Driven</span>
                <span className='word'>Efficiency</span>
            </div>
            <div className='cards'>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${index % 2 === 0 ? 'right' : 'left'}`}
                        ref={(el) => (cardRefs.current[index] = el)}
                    >
                        <img src={card.image} alt={`Card ${index + 1}`} />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <button className='next-button' onClick={handleNextClick}>
                Next →
            </button>
        </div>
    );
};

export default Page2;
