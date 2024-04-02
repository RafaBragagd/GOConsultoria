import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import {IMaskInput, IMask} from 'react-imask'

//CSS
import './CSS/inputBox.css'

//Components
import List from './ThirdDegree/List'

function inputPersonalizado({className, containerId, placeholder, mask, id, name, validation=/.*/, invalidAlert="Preencha este campo", fullList=[], onBlur = () => {}, nextRef}, ref) {
  //UseStates
  const [validClass, setValidClass] = useState("")
  const [classList, setClassList]   = useState("")
  const [filterList, setFilterList] = useState([])

  //Referencias
  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  //Funções
  const inpSubmit = () => {
    console.log("Passou aqui")
  }
  const getValue = () => {
    return inputRef.current.value
  }
  const getInputRef = () => {
    return inputRef.current
  }
  const inpValid = () => {
    const isValid = validation.test(inputRef.current.value);
    if (isValid) {
      setValidClass("valid")
    }else {
      setValidClass("invalid")
    }
  }
  const normalizeText = (text) => {
    const removeAcentuacao = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return removeAcentuacao.toLowerCase()
  }
  const filter = (value) => {
    setClassList("active")
    let filter
    if(value !== ""){
      filter = fullList.filter(item => normalizeText(item).includes(normalizeText(value)))
    } else {
      filter = fullList
    }
    setFilterList(filter)
  }
  const enterEvent = (value) => {
    inputRef.current.focus()
    inputRef.current.value = value
    setClassList("")

  }
  const inpKeyDown = (event) => {
    if(event.key === "Enter"){
      setClassList("")
      nextRef.focus()
    }else if(event.key === "ArrowDown"){
      listRef.current.focusFirst()
    }else if(event.key === "ArrowUp"){
      listRef.current.focusLast()
    }
  }
  const inpBlur =() => {
    onBlur()
    setTimeout(() => {
      if(!(containerRef.current.contains(document.activeElement))){
        inpValid()
        setClassList("")
      }
    }, 50)
  }
  

  //Hooks
  useImperativeHandle(ref, () => ({
    inpSubmit,
    getInputRef,
    getValue,
    inpValid,
  }))

  //Retorno
  return (
    <div ref={containerRef} className={`inputContainer ${validClass}`} id={containerId}>
      <IMaskInput className={`validateInp ${className}`} placeholder={placeholder}
                  ref={ref} inputRef={inputRef} mask={mask} id={id} name={name} 
                  onAccept={(value) => {filter(value)}} onKeyDown={inpKeyDown} autoComplete='off'
                  onBlur={inpBlur} />
      <span className='alert'>{invalidAlert}</span>
      {fullList.length !== 0  ? <List ref={listRef} className={classList} list={filterList} enterEvent={enterEvent} />: null}
    </div>
  )
}

export default forwardRef(inputPersonalizado)