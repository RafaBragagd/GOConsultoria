import { useState, useEffect, useRef } from 'react'
import React from 'react';

import InputMask from 'react-input-mask';
//CSS
import './CSS/CandForm.css'

import Input from "./SecondDegree/input.jsx"

function CandForm() {
    const [cidades, setCidades] = useState([])
    const [estados, setEstados] = useState([])
    
    const [estadoSelecionado, setEstadoSelecionado] = useState('')
    const [cidadeFiltradas, setCidadesFiltradas] = useState([])

    //Referencias
    const email = useRef(null)
    const numberP = useRef(null)

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(data => {
            setEstados(data)
        })

      .catch(error => console.error('Erro ao obter estados:', error))

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
        .then(response => response.json())
        .then(data => {
            setCidades(data)
        })
        .catch(error => console.error('Erro ao obter cidades:', error))
    }, [])

    useEffect(() => {
        if (estadoSelecionado) {
            const filtroCidades = cidades.filter(cidade => cidade.microrregiao.mesorregiao.UF.nome === estadoSelecionado)
            setCidadesFiltradas(filtroCidades)
        } else {
            setCidadesFiltradas(cidades)
        }
    }, [estadoSelecionado, cidades])

    const estadosOnChange = (event) => {
        setEstadoSelecionado(event.target.value)
    }

    
    const submit = (event) => {
        event.preventDefault()
    }

    const testeIM = () => {
        console.log(email.current.value)
    }
  return (
    <form action="" method="post" encType="multipart/form-data" id='candidatura' onSubmit={submit} noValidate >
        {/*<label htmlFor="nome">Nome Completo:</label><br />*/}
        <input  type="text" placeholder="Nome Completo" 
                className='input' id="nome" name="nome" 
                required /><br /><br />

        <input  type="number" placeholder='Idade' 
                className='input' id="idade" name="idade" 
                required /><br /><br />

        <input  type="text" placeholder='Estado em que reside' 
                className='input' id="estado" name="estado" 
                list='estados' autoComplete='off' onChange={estadosOnChange}  required /><br /><br />
        <datalist id='estados'>
            {estados.map((estado, index) => (
                <option key={index} value={estado.nome} />
            ))}
        </datalist>

        <input  type="text" placeholder='Cidade em que reside' 
                className='input' id="cidade" name="cidade" list='cidades' 
                autoComplete='off'  required /><br /><br />
        <datalist id='cidades'>
            {cidadeFiltradas.map((cidade, index) => {
                return <option key={index} value={cidade.nome} />
            })}
        </datalist>

        <input  type="text" placeholder='Vaga que gostaria de se candidatar' 
                className='input' id="vaga" name="vaga" required /><br /><b
             r />


        
        <fieldset id='Contato'>
            <legend>Informações de Contato</legend>

            <InputMask ref={numberP}  mask="(99) 99999-9999" maskChar="_" 
                        className='input' placeholder='Celular' 
                        id="telefone" name="telefone" required onBlur={testeIM} />

        {/*    <InputMask  mask="(99) 99999-9999" maskChar="_" 
                        className='input' placeholder='Celular Adicional' 
        id="telefoneSec" name="telefone" />*/}
            <Input  type='email' placeholder='Informe seu email de contato' 
                    className="input" id='email' name='email' ref={email}
                    validation={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} />

            
        </fieldset><br />
        <fieldset id='Adicionais'>
            <legend>Informações Adicionais</legend>

            <label className='labelForm' htmlFor="mudanca">Disponibilidade para mudança?</label>
            <div className="radioConteiner">
                <input className='inputRadio' type="radio" id="sim_mudanca" name="mudanca" value="sim" />
                <label className='labelForm labelSim' htmlFor="sim_mudanca">Sim</label>

                <input className='inputRadio' type="radio" id="nao_mudanca" name="mudanca" value="nao" />
                <label className='labelForm' htmlFor="nao_mudanca">Não</label>
            </div>

            <label className='labelForm' htmlFor="trabalha">Trabalha atualmente?</label>
            <div className="radioConteiner">
                <input className='inputRadio' type="radio" id="sim_trabalha" name="trabalha" value="sim" />
                <label className='labelForm labelSim' htmlFor="sim_trabalha">Sim</label>
                <input className='inputRadio' type="radio" id="nao_trabalha" name="trabalha" value="nao" />
                <label className='labelForm' htmlFor="nao_trabalha">Não</label>
            </div>

            <label className='labelForm' htmlFor="cnh">Possui CNH?</label>
            <div className="radioConteiner">
                <input className='inputRadio' type="radio" id="sim_cnh" name="cnh" value="sim" />
                <label className='labelForm labelSim' htmlFor="sim_cnh">Sim</label>
                <input className='inputRadio' type="radio" id="nao_cnh" name="cnh" value="nao" />
                <label className='labelForm' htmlFor="nao_cnh">Não</label>
            </div>
        </fieldset><br />

        <label className='labelForm' htmlFor="formacao">Formação:</label><br />
        <textarea id="formacao" name="formacao" rows="4" cols="50" required></textarea><br /><br />

        <label className='labelForm' htmlFor="ambientes">Como se sente em ambientes sociais?</label><br />
        <textarea id="ambientes" name="ambientes" rows="4" cols="50" required></textarea><br /><br />

        <label className='labelForm' htmlFor="decisoes">Como costuma abordar decisões importantes na vida?</label><br />
        <textarea id="decisoes" name="decisoes" rows="4" cols="50" required></textarea><br /><br />

        <label className='labelForm' htmlFor="novidade">Como se sente em relação ao desconhecido e à novidade?</label><br />
        <textarea id="novidade" name="novidade" rows="4" cols="50" required></textarea><br /><br />

        <label className='labelForm' htmlFor="estresse">Qual é a sua reação típica em situações estressantes?</label><br />
        <textarea id="estresse" name="estresse" rows="4" cols="50" required></textarea><br /><br />

        <label className='labelForm' htmlFor="tempo-livre">O que costuma fazer no seu tempo livre?</label><br />
        <textarea id="tempo-livre" name="tempo-livre" rows="4" cols="50" required></textarea><br /><br />

        <label className='labelForm' htmlFor="mudancas">Como se sente em relação a mudanças em sua vida?</label><br />
        <textarea id="mudancas" name="mudancas" rows="4" cols="50" required></textarea><br /><br />

        <label className='labelForm' htmlFor="valoriza">O que mais valoriza em um trabalho?</label><br />
        <textarea id="valoriza" name="valoriza" rows="4" cols="50" required></textarea><br /><br />

        <label className='labelForm' htmlFor="curriculo">Insira o seu currículo aqui (PDF ou Word):</label><br />
        <input type="file" id="curriculo" name="curriculo" accept=".pdf,.doc,.docx" required /><br /><br />

        <input type="submit" value="Enviar" />
    </form>
  );
}

export default CandForm;
