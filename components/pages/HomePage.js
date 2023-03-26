import React from 'react';
import styles from '../../styles/styles.module.css'

function HomePage() {
  return (
   <>
    <h1 className={styles['home-header']}>Maximilian Holzmann's Portfolio</h1>
    <p className={styles['home-text']}>Thank you for taking the time to view my portfolio and consider me for your position.</p>
   </>
  );
}

export default HomePage;