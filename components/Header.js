import React from 'react';
import Button from '@mui/material/Button'
import styles from '../styles/styles.module.css'


function Header() {
  return (
    <>
    <nav className={styles['nav']}>
   <h1>This is from my header</h1>
   <Button variant="text">Home</Button>
   <Button variant="text">About</Button>
   <Button variant="text">Portfolio</Button>
   <Button variant="text">Contact</Button>
   </nav>
   </>
  );
}

export default Header;