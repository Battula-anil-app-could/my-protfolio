import React from 'react';
import './projects.css';

const projects = [
  {
    name: 'E-MERN Stack Commerce Website',
    link: 'https://anil-ecommerce-app.netlify.app/',
    description: 'It is almost similar to Flipkart but with my own UI and a responsive website.',
    technologies: ['MySQL', 'Node.js', 'Express.js', 'React.js']
  },
  {
    name: 'Password Saving App',
    link: 'https://anilpsapp.ccbp.tech/',
    description: 'A simple UI for saving all passwords, usernames of different websites or apps. Passwords are shown to the user when they click on "show passwords". This is not a responsive website.',
    technologies: ['React.js']
  },
  {
    name: 'Wikipedia Search App',
    link: 'https://anilwikihttp.ccbp.tech/',
    description: 'We can search anything and get Wikipedia details. The UI is responsive.',
    technologies: ['Node.js', 'JavaScript']
  },
  {
    name: 'Todos Application',
    link: 'https://aniltodoappli.ccbp.tech/',
    description: 'All functions of a todo app like CRUD operations with a nice UI and responsive design.',
    technologies: ['JavaScript']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-link"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">Technologies: {project.technologies.join(', ')}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
