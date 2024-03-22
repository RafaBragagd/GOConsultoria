import React from 'react'

//CSS
import './CSS/JobCard.css'

function JobCard({classN, indexJC, title, address, salary="Negociavel", hiring = "CLT", mode = "Presencial", description, listRequir=[], listBenefits=[]}) {
    const RequirLenght = listRequir.length === 0
    const benefiLenght = listBenefits.length === 0

    const Requirement = listRequir.map((item, index) => {
        return <li key={`${item} ${indexJC+index}`}>{item}</li>
    })
    const benefits = listBenefits.map((item, index) => {
        return <li key={`${item} ${indexJC+index}`}>{item}</li>
    })

    const HTMLRequir = RequirLenght ? "" : <><h6>Requisitos</h6>
                                                <ul>
                                                    {Requirement}
                                                </ul>
                                            </>
    const HTMLBenefit = benefiLenght ? "" : <><h6>Benefícios</h6>
                                                <ul>
                                                    {benefits}
                                                </ul>
                                            </>

  return (
    <li className={classN}>
        <h3>{title}</h3>
        <h4>{address}</h4>
        <h5 className='salary'>{salary === "Negociavel" ? salary : `R$ ${salary}`}</h5>
        <h5 className='hiring'>{hiring}</h5>
        <h5 className='mode'>{mode}</h5>
        <div className='Content'>
            <p>{description}</p>
            {HTMLRequir}
            {HTMLBenefit}
        </div>
    </li>
  )
}

export default JobCard