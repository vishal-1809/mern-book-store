import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [value, Setvalue] = useState();
  return (
    <>
      <AppBar sx={{ backgroundColor: '#232F3D' }} position="sticky">
        <Toolbar>
          <NavLink to='/' style={{ color: 'white' }}>
            <Typography>
              <LibraryBooksIcon />
            </Typography>
          </NavLink>

          <Tabs sx={{ ml: 'auto' }}
            textColor='inherit' indicatorColor="primary" value={value} onChange={(e, val) => Setvalue(val)}>
            <Tab LinkComponent={NavLink} to='/add' label='Add Product' />
            <Tab LinkComponent={NavLink} to='/books' label='Books' />
            <Tab LinkComponent={NavLink} to='/about' label='About Us' />
          </Tabs>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header