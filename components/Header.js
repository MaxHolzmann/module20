import React, { useState } from 'react';
import Button from '@mui/material/Button'
import styles from '../styles/styles.module.css'


function Header({currentPage, handlePageChange}) {

  return (
    <>
    <nav className={styles['nav']}>
   <h1>Maximilian Holzmann</h1>
   <Button className={styles.navLink} onClick={() =>handlePageChange('Home')} variant="text">Home</Button>
   <Button className={styles.navLink} onClick={() =>handlePageChange('About')} variant="text">Bio</Button>
   <Button className={styles.navLink} onClick={() => handlePageChange('Portfolio')} variant="text">Portfolio</Button>
   <Button  className={styles.navLink} onClick={() =>handlePageChange('Contact')} variant="text">Contact</Button>
   </nav>
   </>
  );
}

export default Header;