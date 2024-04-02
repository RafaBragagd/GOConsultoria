import React, { forwardRef, useImperativeHandle, useRef } from 'react'

//CSS
import './CSS/List.css'

function List ({ list = [], enterEvent, className }, ref) {
  //Referencias
  const listRef = useRef(null)
  // Funções
  const callEnterEvent = () => {
    const focusedElement = document.activeElement;
    enterEvent(focusedElement.textContent)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const items = listRef.current.querySelectorAll('li')
      const focusedIndex = Array.from(items).findIndex((item) => item === document.activeElement)
      if (focusedIndex < items.length - 1) {
        items[focusedIndex + 1].focus()
      }
    } else if(event.key === 'ArrowUp'){
        event.preventDefault()
        const items = listRef.current.querySelectorAll('li')
        const focusedIndex = Array.from(items).findIndex((item) => item === document.activeElement)
        if (focusedIndex > 0) {
          items[focusedIndex - 1].focus()
        }
    } else if(event.key === 'Enter'){
        callEnterEvent()
    }
  }
  const focusFirst = () => {
    const items = listRef.current.querySelectorAll('li')
    items[0].focus()
  }
  const focusLast = () => {
    const items = ref.current.querySelectorAll('li')
    items[items.length - 1].focus()
  }

  useImperativeHandle(ref, () => ({
    focusFirst,
    focusLast,
  }))
  return (
    <ul ref={listRef} className={`customList ${className}`} onKeyDown={handleKeyDown}>
      {list.map((item, index) => (
        <li key={index} onClick={callEnterEvent} tabIndex="0">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default forwardRef(List)