import { Link } from "react-router-dom";

import React, { useState } from 'react';


//Images
import Logo from './img/GM.svg'
import BarsMenu from './img/bars-solid.svg'

//Componentes
import LinkScroll from "./SecondDegree/LinkScroll";
//CSS
import './CSS/Header.css'


function Header() {
    const [dropdown1, setDropdown1] = useState(false)
    const menuButtonClick = () => {
        setDropdown1(!dropdown1)
    }

  return (
    <header>
        <div className='header'>
            <img src={Logo} alt="Logo" className='logo'/>
            <button id='menuButton' onClick={menuButtonClick} >
                <img src={BarsMenu} alt="Menu Button"  />
            </button>
        </div>
        <ul className={dropdown1 ? "menu" : "menu  disable"}>
            <li onClick={menuButtonClick}><LinkScroll link="/" scrollID="#SobreNos">Sobre nós</LinkScroll></li>
            <li onClick={menuButtonClick}><LinkScroll link="/" scrollID="#Servicos">Serviços</LinkScroll></li>
            <li onClick={menuButtonClick}><LinkScroll link="/joblist" scrollID="#JobCarousel">Nossas Vagas</LinkScroll></li>
            <li onClick={menuButtonClick}><LinkScroll link="/candidateForm" scrollID="#body">Área do Candidato</LinkScroll></li>
        </ul>
        
    </header>
  )
}

export default Header