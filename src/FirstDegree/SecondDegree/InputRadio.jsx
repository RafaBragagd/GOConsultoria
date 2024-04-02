import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

//CSS
import './CSS/inputRadio.css'

function InputRadio({group="", options, title="", containerClass="", nextRef}, ref) {
    const divRef = useRef(null)
    const [value, setValue] = useState("")

    //Funções
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const getValue = () => {
        return value
    }
    const getFirst = () => {
        const items = divRef.current.querySelectorAll('input')
        return items[0]
    }
    const handleKeyDown = (event) => {
        if ((event.key === 'ArrowDown')||(event.key === 'ArrowRight')) {
          event.preventDefault()
          const items = divRef.current.querySelectorAll('input')
          const focusedIndex = Array.from(items).findIndex((item) => item === document.activeElement)
          if (focusedIndex < items.length - 1) {
            items[focusedIndex + 1].focus()
          }
        } else if((event.key === 'ArrowUp')||(event.key === 'ArrowLeft')){
            event.preventDefault()
            const items = divRef.current.querySelectorAll('input')
            const focusedIndex = Array.from(items).findIndex((item) => item === document.activeElement)
            if (focusedIndex > 0) {
              items[focusedIndex - 1].focus()
            }
        } else if(event.key === 'Enter'){
            event.target.checked = true
            nextRef.focus()
        }
      }


    useImperativeHandle(ref, () => ({
        getValue,
        getFirst,
    }))
  return (
    <>
        <h4 className='labelForm' htmlFor={group}>{title}</h4>
        <div ref={divRef} className={`radiocontainer ${containerClass}`} onKeyDown={handleKeyDown}>
            {options.map((option, index) => (
                <div key={index} className='radioOption'>
                    <input className='inputRadio' type="radio" id={`${option}_${group}`} name={group} value={option} onChange={handleChange} />
                    <label className={`labelForm ${index===(options.length - 1) ? "last": ""}`} htmlFor={`${option}_${group}`}>{option}</label>
                </div>
            ))}
        </div>
    </>
  )
}

export default forwardRef(InputRadio)