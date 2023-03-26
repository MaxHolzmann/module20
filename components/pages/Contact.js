import React from 'react';
import styles from '../../styles/styles.module.css'


function Contact() {
  return (
   <>
    <h1 className={styles['contact-header']}>Contact Me</h1>
    <p className={styles['contact-text']}>Use any of the contact methods below to contact me!</p>
    <p className={styles['contact-methods']}><a href="mailto:max@holzmann.io">max@holzmann.io</a></p>
    <p className={styles['contact-methods']}><a href="https://github.com/MaxHolzmann">GitHub</a></p>
   </>
  );
}

export default Contact;