import React, { useRef, useState } from 'react';
import InputMask from 'react-input-mask';

// CSS
import './CSS/input.css';

function Input ({ mask = "", maskChar, type = "text", placeholder = "", className = "", id = "", name = "", validation = /^.*$/, AlertText = "Preencha este campo"}) {
    //Referencia
    const referencia = useRef(null)
    //useState
    const [valid, setValid] = useState("")

    const validate = (event) => {
        event.preventDefault();
        const isValid = validation.test(referencia.current.value);
        console.log(referencia.current.value)
        if (!isValid) {
            setValid("invalid");

            window.scrollTo({
                top: referencia.current.offsetTop,
            })

        } else {
            setValid("")
        }
    };
/*<div  className={`validateInp ${valid}`} id={id} name={name} >
            <InputMask  mask={mask} maskChar={maskChar} type={type} placeholder={placeholder}
                        className={`${className}`} ref={referencia} onBlur={validate} />
            <div className="alert">{AlertText}</div>
    </div>*/
    return (
        <InputMask  mask={mask} maskChar={maskChar} type={type} placeholder={placeholder}
                        className={`${className}`} ref={referencia} onBlur={validate} />
        
    )
}

export default Input;
