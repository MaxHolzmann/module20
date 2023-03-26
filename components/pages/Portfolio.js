import React from 'react';
import Project from '../Project';
import styles from '../../styles/styles.module.css'

const projectOne = {
  title: "Max Blog",
  description: "A full stack blog application created using NodeJS, Express & MySQL",
  url: "https://max-blog.herokuapp.com/",
  img: "./project-one.png"
}

const projectTwo = {
  title: "Get It Done",
  description: "A full stack to-do list application created using OAuth & MySQL",
  url: "https://get-it-done.herokuapp.com/",
  img: "./project-two.png"
}

const projectThree = {
  title: "Pokemon Team",
  description: "A Random Pokemon Team Generator!",
  url: "https://maxholzmann.github.io/pokemon-team/",
  img: "./project-three.png"
}

function Portfolio() {
  return (
    <>
   <Project project={projectOne}></Project>
   <Project project={projectTwo}></Project>
   <Project project={projectThree}></Project>
   </>
  );
}

export default Portfolio;