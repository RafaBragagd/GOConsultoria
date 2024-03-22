import { Link } from 'react-router-dom';
import React from 'react'

function LinkScroll({link, scrollID, children}) {
    const clickLink = (event) => {
      setTimeout(() => {
        const element = document.querySelector(scrollID)
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
            })
        }
      }, 100)
    }
  return (
    <Link to={link} onClick={clickLink}>{children}</Link>
  )
}

export default LinkScroll