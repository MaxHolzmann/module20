import React,  { useState }  from 'react';
import Button from '@mui/material/Button'

const [currentPage, setCurrentPage] = useState('Home');


function Navigation() {
  return (
    <>
   <h1>This is from my nav</h1>
   </>
  );
}

export default Navigation;