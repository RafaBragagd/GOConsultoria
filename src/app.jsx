import React from 'react'

import { Outlet } from 'react-router-dom'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


//Components
import Header from './FirstDegree/header'
import Footer from './FirstDegree/footer'

//CSS
import "./CSS/app.css"

function app() {
  const ScrollToTop = () => {
    window.scrollTo ({
      top: 0,
    })
  }
  return (
    <div className="App">
      <Header />
      <Outlet />
      <button className='RoundBtn' onClick={ScrollToTop}><FontAwesomeIcon icon={faChevronUp} /></button>
      <Footer />
    </div>
  )
}

export default app