import React from 'react';
import '../styles/certifications.css'; // Import the CSS for styling

const certifications = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Master HTML, CSS, JavaScript, and React to earn your certificate.',
    image: '/src/assets/images/homebackground.png'
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Learn Java, Spring Boot, REST APIs, and build scalable backend systems.',
    image: '/src/assets/images/homebackground.png'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    description: 'Combine frontend and backend expertise for real-world full stack development.',
    image: '/src/assets/images/homebackground.png'
  }
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-heading">Available Certifications</h2>
      <div className="certifications-grid">
        {certifications.map(cert => (
          <div className="cert-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <button className="earn-button">Earn Certificate</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
