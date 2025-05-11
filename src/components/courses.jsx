import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Importing Play Icon
import '../styles/courses.css';  // Ensure this file exists in your styles folder

const courses = [
    {
        id: 1,
        logo: 'src/assets/images/homebackground.png',
        title: 'CSS',
        link: 'https://devdocs.io/css/'
    },
    {
        id: 2,
        logo: 'src/assets/images/homebackground.png',
        title: 'Java',
        link: 'https://devdocs.io/openjdk~21/'
    },
    {
        id: 3,
        logo: 'src/assets/images/homebackground.png',
        title: 'HTML',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        id: 4,
        logo: 'src/assets/images/c++logo.png',
        title: 'C++',
        link: 'https://devdocs.io/cpp/'
    },
    {
        id: 5,
        logo: 'src/assets/images/homebackground.png',
        title: 'JavaScript',
        link: 'https://devdocs.io/javascript/'
    },
    {
        id: 6,
        logo: 'src/assets/images/homebackground.png',
        title: 'Node.js',
        link: 'https://devdocs.io/node/'
    },
    {
        id: 7,
        logo: 'src/assets/images/clogo.jpg',
        title: 'C Language',
        link: 'https://devdocs.io/c/'
    }
];

const Courses = () => {
    return (
        <div className="courses-container">
            <div className="courses-section">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={course.logo} alt={`${course.title} logo`} className="course-logo" />
                        <h3 className="course-title">{course.title}</h3>
                        <a 
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="learn-button"
                        >
                            Learn
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 74 74"
                                height="34"
                                width="34"
                            >
                                <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                                <path
                                    fill="black"
                                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                />
                            </svg>
                        </a>
                    </div>
                ))}
                <div className="view-all-container">
                    <p className="view-all-text">View All Courses</p>
                   <a href='https://devdocs.io/'><button className="view-all-button">
                        <FaPlay className="play-icon" />
                    </button></a>
                </div>
            </div>
        </div>
    );
};

export default Courses;
