import React from 'react';


function Project({project}) {
  return (
    <>
   <h1>{project.title}</h1>
   <h2><a target="_blank" href={project.url}>Deployment Link</a></h2>
   <h2>{project.description}</h2>
   <img src={project.img}></img>
   </>
  );
}

export default Project;