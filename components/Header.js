import React, { useState } from 'react';
import Button from '@mui/material/Button'
import styles from '../styles/styles.module.css'


function Header({currentPage, handlePageChange}) {

  return (
    <>
    <nav className={styles['nav']}>
   <h1>This is from my header</h1>
   <Button onClick={() =>handlePageChange('Home')}variant="text">Home</Button>
   <Button onClick={() =>handlePageChange('About')} variant="text">About</Button>
   <Button onClick={() => handlePageChange('Portfolio')} variant="text">Portfolio</Button>
   <Button onClick={() =>handlePageChange('Contact')} variant="text">Contact</Button>
   </nav>
   </>
  );
}

export default Header;