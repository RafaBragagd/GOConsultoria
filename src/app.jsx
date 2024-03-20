import React from 'react'

import { Outlet } from 'react-router-dom'


//Components
import Footer from './FirstDegree/footer'
function app() {
  return (
    <div className="App">
        <Outlet />
        <Footer />
    </div>
  )
}

export default app