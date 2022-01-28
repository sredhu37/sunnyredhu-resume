import React, { useState } from 'react';
import { List } from 'react-bootstrap-icons';

const Header = () => {
  const [menuItemsClassName, setMenuItemsClassName] = useState('rightMenuItems');

  const toggleMenu = () => {
    console.log("Toggle")
    if (menuItemsClassName === 'rightMenuItems') {
      setMenuItemsClassName('rightMenuItemsExpanded')
    } else if (menuItemsClassName === 'rightMenuItemsExpanded') {
      setMenuItemsClassName('rightMenuItems')
    }
  }

  return(
    <div className='Header'>
      <div className='floatMenuLeft'>
        <ul className='leftMenuItems'>
          <a href='#introduction'><li className='menuItem headerName'>SUNNY REDHU</li></a>
        </ul>
      </div>
      <div className='floatMenuRight'>
        <ul className={menuItemsClassName}>
          <li className='hamburger' onClick={toggleMenu}><List color="#EE4B28" size={50} /></li>
          <a href='#about'><li className='menuItem'>ABOUT</li></a>
          <a href="#skills"><li className='menuItem'>SKILLS</li></a>
          <a href='#experience'><li className='menuItem'>EXPERIENCE</li></a>
          <a href='#resume'><li className='menuItem'>RESUME</li></a>
          <a href='#contact'><li className='menuItem'>CONTACT</li></a>
        </ul>
      </div>
      <div className="floatDummy"></div>
    </div>
  );
}

export default Header;