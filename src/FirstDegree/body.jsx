import { Link } from "react-router-dom";
import React from 'react'

//Component
import SlideText from "./SecondDegree/SlideText.jsx"

//CSS
import './CSS/Body.css'

//Image
import Avatar from "./img/Foto Exemplo.jpeg"
import Icon from "./img/Icon.svg"

function body() {
  
  return (
    <div id='body'>
      <div id="Apresentacao">
        <img src={Avatar} alt="Avatar" />
        <div className='ApreText'>
          <div className='Title'>
          <h3 id='Go'>Go </h3>
          <h3>Consultoria de RH</h3>
          </div>
          <h4>Dê um upgrade no seu RH e impulsione os resultados da sua empresa. <br />A consultoria que te guia na jornada de transformação.</h4>
        </div>
      </div>

      <div id='SobreNos'>
        <h2 className="segment">Quem é a <span className='EmpName'>GO!</span></h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam non delectus corporis libero quam ad rerum itaque quis commodi quia a reprehenderit, aspernatur assumenda, molestiae animi in? Reprehenderit, odio eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, cumque delectus? Fugiat necessitatibus neque eius quibusdam molestiae excepturi perferendis consequuntur voluptatibus ipsum et sapiente voluptatum laboriosam, sed maxime quae? Sapiente?</p>
      </div>

      <div id="Servicos">
        <h2 className="segment"><span className='EmpName'>Go!</span> Soluções</h2>
        <ul>
          <SlideText icon={Icon} 
                      alt="Icon" 
                      title="Serviço 1" 
                      classDirec="right"
                      descript="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eos esse fugit necessitatibus itaque incidunt enim minima laborum nam vel suscipit illum blanditiis sint veniam dolore corrupti, laboriosam numquam aliquam?"
            />
          <SlideText icon={Icon} 
                    alt="Icon" 
                    title="Serviço 2" 
                    classDirec="left"
                    descript="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eos esse fugit necessitatibus itaque incidunt enim minima laborum nam vel suscipit illum blanditiis sint veniam dolore corrupti, laboriosam numquam aliquam?"
          />
          <SlideText icon={Icon} 
                    alt="Icon" 
                    title="Serviço 3" 
                    classDirec="right"
                    descript="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eos esse fugit necessitatibus itaque incidunt enim minima laborum nam vel suscipit illum blanditiis sint veniam dolore corrupti, laboriosam numquam aliquam?"
          />
          <SlideText icon={Icon} 
                    alt="Icon" 
                    title="Serviço 4" 
                    classDirec="left"
                    descript="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eos esse fugit necessitatibus itaque incidunt enim minima laborum nam vel suscipit illum blanditiis sint veniam dolore corrupti, laboriosam numquam aliquam?"
          />
        </ul>
      </div>

      <div id="Vagas">
        <h2 className='segment'>Explore nossas oportunidades</h2>
        <button><Link to="/joblist">Nossas Vagas</Link></button>
      </div>

    </div>
  )
}

export default body