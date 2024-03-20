import { useEffect, useRef, useState } from 'react'
import React from 'react'

// CSS
import './CSS/SlideText.css'

function SlideText({ icon, alt, title, classDirec, descript }) {
  const ref = useRef()
  const [bottom, setBottom] = useState(0)

  useEffect(() => {

    const onScroll = () => {
      const rect = ref.current.getBoundingClientRect()
      setBottom(rect.bottom)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <li ref={ref} className={`SliderText ${classDirec} ${bottom - window.innerHeight <= 50 ? 'anima' : ''}`}>
      <img src={icon} alt={alt} />
      <h3>{title}</h3>
      <p>{descript}</p>
    </li>
  )
}

export default SlideText;
