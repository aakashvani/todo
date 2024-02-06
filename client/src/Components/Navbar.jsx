// import React from 'react'
import { Box,Button } from '@chakra-ui/react';
import '../Styles/homepage.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='navbar_container'>
      <Link to="/"> <Box className='sub-nav-container-left'><img width="50" height="50" src="https://img.icons8.com/clouds/100/calendar-document---v2.png" alt="calendar-document---v2"/>
       Todo
       </Box></Link>
        <Box className='sub-nav-container-right'>
        <Button><Link to="/signin">Log in</Link></Button>
        <Button>Start to free</Button>
        </Box>
      </nav>
  )
}

export default Navbar