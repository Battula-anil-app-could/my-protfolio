import React, { useEffect, useState } from 'react';
import './aboutMe.css';


export default function AboutMe() {
  const [currentExperience, setCurrentExperience] = useState(0);
  const experiences = [
    {
      title: 'Dugong Global Services - Software Developer',
      duration: 'October 2023 - Present',
      description: [
        'Played a major role in this startup, acting as a Software Developer.',
        'Designed and developed an employee portal for the company using the MERNstack',
        'Implemented features such as leave management, payslips, and daily work timetracking.',
        'Facilitated team collaboration and ensured project milestones were met efficiently.'
      ]
    },
    {
      title: 'VSaas Global Services - Python Developer',
      duration: 'March 27, 2023 - September 31, 2023',
      description: [
        'Developed a full-stack e-commerce website with all the functionalities similar to Flipkart.',
        'Utilized Python, React.js, Node.js, Express.js, and MySQL to create a robust and scalable platform.',
        'Collaborated with a cross-functional team to ensure seamless integration of frontend and backend components.'
      ]
    }
    
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperience((prev) => (prev + 1) % experiences.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [experiences.length]);

  const skills = ["Python", "React.js", "Node.js", "Express.js","Mysql", "Rust", "Blockchain", "DSA"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (index >= skills.length -1){
        setIndex(0)
      }else{
        setIndex(prev => prev += 1)
      }
    }, 3000)
  }, [index])

  return (
    <section id="about" className="about-me-container">
      <div className="about-me-content">
        <div className="about-me-image">
          <h3 className='skills'>---{">"}{skills[index]}</h3>
        </div>
        <div className="about-me-details">
          <h2>
            About Me
          </h2>
          {experiences.map((exp, index) => (
            <div key={index} className={`experience ${index === currentExperience ? 'show' : 'hide'}`}>
              <p className="job-title">{exp.title}</p>
              <p className="job-duration">{exp.duration}</p>
              <ul className="job-description">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
          {/* <p className="skills">Skills: Python, DSA, Rust, React.js, Node.js, MySQL, Express.js, Puppeteer</p> */}
        </div>
      </div>
    </section>
  );
}
