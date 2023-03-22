import React from 'react';
import Project from '../Project';

const projectOne = {
  title: "testo project title",
  description: "Testo project description",
  url: "https://youtube.com/",
  img: ""
}

function Portfolio() {
  return (
    <>
   <Project project={projectOne}></Project>
   </>
  );
}

export default Portfolio;