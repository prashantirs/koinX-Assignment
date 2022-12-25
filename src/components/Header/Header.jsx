import React from 'react'
import './Header.css'
import cmpLogo from '../../assets/companylogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <div className='Header'>
      <div className="companytitle">
        <img src ={cmpLogo} alt ="company logo" className="companylogo" height={20}></img>
        <div className="companyname">Crypto Tracker</div>
      </div>
      <div className="menu">
        {/* if window width is greater than 750px then show search icon */}
        {window.innerWidth > 750 && <SearchIcon/>}
        <MenuIcon fontSize='medium'/>
      </div>
    </div>
  )
}

export default Header