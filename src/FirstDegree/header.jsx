import React, { useState } from 'react';


//Images
import Logo from './img/GM.svg'
import BarsMenu from './img/bars-solid.svg'

//CSS
import './CSS/Header.css'


function Header({MenuBtn=true, MenuD}) {
    const [dropdown1, setDropdown1] = useState(false)
    const menuButtonClick = () => {
        setDropdown1(!dropdown1)
    }
    const menuButton = MenuBtn ?   <button id='menuButton' onClick={menuButtonClick} >
                                    <img src={BarsMenu} alt="Menu Button"  />
                                </button> : ""
    const Menu = <ul className={dropdown1 ? "menu" : "menu  disable"}>
                    {MenuD}
                </ul>
  return (
    <header>
        <div className='header'>
            <img src={Logo} alt="Logo" className='logo'/>
            {menuButton}
        </div>
        {Menu}
        
    </header>
  )
}

export default Header