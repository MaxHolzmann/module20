import React from 'react';
import styles from '../../styles/styles.module.css'


function About() {
  return (
   <>
   <h1 className={styles['about-header']}>Maximilian Holzmann</h1>
   <div className={styles['about-container']}>
    <img className={styles['about-img']} src='./profile-pic.png' alt="Icon" />
    <p className={styles['about-bio']}>Hello! My name is Maximilian Holzmann, and I'm based out of Fond du Lac, Wisconsin. I am currently a recent graduate of University of Minnesota's Full Stack Bootcamp for web development.
    Outside of Web Development, I have many hobbies. I love to sing with my community choir and with my acapella quartet. I prioritize working out and staying active every day, through many activities such as running or pick up basketball. I also volunteer on the Board of Directors in two community organizations, through South Shore Chorale and United Way Fond du Lac.
I am also an active Real Estate Investor, and hold my Real Estate license in the state of Wisconsin.</p>
   </div>
   </>
  );
}

export default About;