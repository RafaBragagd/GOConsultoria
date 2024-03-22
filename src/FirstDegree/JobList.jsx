import { Link } from "react-router-dom";

import React, { useEffect, useState } from 'react'

//Components
import JobCard from './SecondDegree/jobCard.jsx'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

//CSS
import './CSS/JobList.css'

const Jobs = [
    {
        title: "Vaga de Emprego 1",
        address: "Rua 1, Nº 000, Cidade tal, RS - Brasil",
        salary: "1111,00",
        hiring: "CLT",
        mode: "Presencial",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ducimus veritatis odio esse perferendis consequuntur eveniet totam consectetur minus animi recusandae libero, corrupti nihil sapiente, magnam alias impedit illo velit.",
        listRequir: ["Requesito 1", "Requesito 2", "Requesito 3"],
        listBenifits: ["Benficio 1", "Benficio 1", "Benficio 1"],
    },
    {
        title: "Vaga de Emprego 2",
        address: "Rua 1, Nº 000, Cidade tal, RS - Brasil",
        salary: "1111,00",
        hiring: "CLT",
        mode: "Remoto",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ducimus veritatis odio esse perferendis consequuntur eveniet totam consectetur minus animi recusandae libero, corrupti nihil sapiente, magnam alias impedit illo velit.",
        listRequir: ["Requesito 1", "Requesito 2", "Requesito 3"],
        listBenifits: [],
    },
    {
        title: "Vaga de Emprego 3",
        address: "Rua 1, Nº 000, Cidade tal, RS - Brasil",
        salary: "1111,00",
        hiring: "PJ",
        mode: "Semi-Presencial",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ducimus veritatis odio esse perferendis consequuntur eveniet totam consectetur minus animi recusandae libero, corrupti nihil sapiente, magnam alias impedit illo velit.",
        listRequir: ["Requesito 1", "Requesito 2", "Requesito 3"],
        listBenifits: ["Benficio 1", "Benficio 1", "Benficio 1"],
    },
    {
        title: "Vaga de Emprego 4",
        address: "Rua 1, Nº 000, Cidade tal, RS - Brasil",
        salary: "1111,00",
        hiring: "PJ",
        mode: "Semi-Presencial",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ducimus veritatis odio esse perferendis consequuntur eveniet totam consectetur minus animi recusandae libero, corrupti nihil sapiente, magnam alias impedit illo velit.",
        listRequir: ["Requesito 1", "Requesito 2", "Requesito 3"],
        listBenifits: ["Benficio 1", "Benficio 1", "Benficio 1"],
    },
]
function JobList() {
    const [classList, setClassList] = useState([])

    const carrossel = Jobs.map((item, index) => {
        if (index >= classList.length) {
            const newList = [...classList, "JobCard"]
            setClassList(newList)
        }
        return  <JobCard key={`jobcard ${index}`}
                    classN={classList[index]}
                    indexJC={index}
                    title={item.title} 
                    address={item.address} 
                    salary={item.salary} 
                    hiring={item.hiring} 
                    mode={item.mode}
                    description={item.description}
                    listRequir={item.listRequir}
                    listBenefits={item.listBenifits}
                />
    })
    
    useEffect(() => {
        let newList = [...classList]
        newList[0] = "JobCard current"
        newList[1] = "JobCard next"
        newList[newList.length - 1] = "JobCard prev"
        setClassList(newList)
    }, [])

    const nextJob = ()=> {
        let auxList = [...classList]

        const prev = auxList.indexOf("JobCard prev")
        const current = auxList.indexOf("JobCard current")
        const next = auxList.indexOf("JobCard next")

        const newNext = next + 1


        auxList[prev] = "JobCard"
        auxList[current] = "JobCard prev"
        auxList[next] = "JobCard current"

        if (newNext >= auxList.length){
            auxList[0] = "JobCard next"
        } else {
            auxList[newNext] = "JobCard next"
        }

        setClassList(auxList)

        //Desabilita o foco do botão ao clicar
        document.getElementById('next').blur();
    }

    const prevJob = () => {
        let auxList = [...classList]

        const prev = auxList.indexOf("JobCard prev")
        const current = auxList.indexOf("JobCard current")
        const next = auxList.indexOf("JobCard next")

        const newPrev = prev - 1

        auxList[next] = "JobCard"
        auxList[current] = "JobCard next"
        auxList[prev] = "JobCard current"

        if (newPrev === -1){
            auxList[auxList.length - 1] = "JobCard prev"
        } else {
            auxList[newPrev] = "JobCard prev"
        }
        
        setClassList(auxList)

        //Desabilita o foco do botão ao clicar
        document.getElementById('prev').blur();
    }

    const Menu =    <>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#Candidato">Área do Candidato </a></li>
                    </>

  return (
    <>
        <section id='JobCarousel'>
            <ul>
                {carrossel}
            </ul>
            <div className="buttons">
                <button type='button' id="prev" onClick={prevJob}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} />
                </button>
                <button type='button' id="register">Inscreva-se</button>
                <button type='button' id="next" onClick={nextJob}>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff",}} />
                </button>
            </div>
        </section>
    </>
  )
}

export default JobList