import React, {useState} from 'react';
import './navbar.css'

import AppLogo from '../assets/AppLogo.svg'
import DownArrow from '../assets/DownArrow.svg'
import ProfileIcon from '../assets/Profile.svg'

const Navbar = () => {
  // need to add some userState here when user search past entries by keywords
  // and the onClick handler when user click search button
  const [searchKeywords, setSearchKeywords] = useState('')
  const handleSearchKeywords = (e) => {
    setSearchKeywords(e.target.value)
  }
  const handleSearch = ()=> {
    alert(searchKeywords)
  }
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={AppLogo}></img>
        <span className="navbar-logo-name">budEJournal</span>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="🔍 Search past entries by keywords" value={searchKeywords} onChange={handleSearchKeywords} />
      </div>
      <div className="navbar-user">
        <img src={ProfileIcon}></img>
        <span className="username-fontstyle">Emily Nguyen</span>
        <img src={DownArrow}></img>
      </div>
    </nav>
  );
};

export default Navbar;
