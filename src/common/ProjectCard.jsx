import React from 'react';

function ProjectCard({ src, link, h3, p,major }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}{major&&<p>*under development</p>}</h3>
      <p >{p}</p>
    </a>
  );
}

export default ProjectCard;
