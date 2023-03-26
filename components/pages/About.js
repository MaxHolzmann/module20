import React from 'react';
import styles from '../../styles/styles.module.css'


function About() {
  return (
   <>
   <h1 className={styles['about-header']}>Maximilian Holzmann</h1>
   <div className={styles['about-container']}>
    <img className={styles['about-img']} src='./profile-pic.png' alt="Icon" />
    <p className={styles['about-bio']}>This is my test bio. I don't have a bio written, but I want it to be lengthy, so I will continue to type things. Hello, bio bio bio!</p>
   </div>
   </>
  );
}

export default About;