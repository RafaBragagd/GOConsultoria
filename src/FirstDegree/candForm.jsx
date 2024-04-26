import React, { useRef, useEffect, useState } from 'react'

//CORS

//CSS
import './CSS/CandForm.css'

//Componentes
import Input from "./SecondDegree/inputBox.jsx"
import InputRadio from './SecondDegree/InputRadio.jsx'

//JSON
import links from "./credenciais/links.json"

const InputTypes = {
  letters : /^[a-zA-ZÀ-ÿ\s]*$/,
  digits : /^\d+$/,
  letDigit : /^\w+$/,
  noSpecial : /^[\wÀ-ÿ\s]+$/,
}
const InputValid = {
  required : /^(?!\s*$).+/,
}


function candForm() {
  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])
  const [estadoSelecionado, setEstadoSelecionado] = useState('')
  const [cidadeFiltradas, setCidadesFiltradas] = useState([])

  //Referencias
  const name    = useRef(null)
  const age     = useRef(null)
  const state   = useRef(null)
  const city    = useRef(null)
  const fone    = useRef(null)
  const secFone = useRef(null)
  const email   = useRef(null)

  const moving  = useRef(null)
  const work    = useRef(null)
  const CNH     = useRef(null)
  const formacao= useRef(null)
  const challeng= useRef(null)
  const socialS = useRef(null)
  const WEnviPro= useRef(null)
  const decision= useRef(null)
  const conflict= useRef(null)
  const organiz = useRef(null)
  const team    = useRef(null)
  const WEnviPre= useRef(null)
  const curriFil= useRef(null)

  const subBtn  = useRef(null)


  //API ibge
  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(data => {
        const nomesEstados = data.map(estado => estado.nome)
        setEstados(nomesEstados)
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
        const filtroCidadesNome = filtroCidades.map(cidade => cidade.nome)
        setCidadesFiltradas(filtroCidadesNome)
    } else {
        const filtroCidadesNome = cidades.map(cidade => cidade.nome)
        setCidadesFiltradas(filtroCidadesNome)
    }
  }, [estadoSelecionado, cidades])

  //Funções
  const estadoBlur = () => {
    const retorno = state.current.getValue()
    setEstadoSelecionado(retorno)
  }
  const keyDown = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault()
    }
  }
  const keyDownCurri = (event) => {
    if(event.key === 'Enter'){
      subBtn.current.focus()
    }
  }



  const submit = (event) => {
    event.preventDefault()
    const form = document.querySelector("#candidatura")
    const formData = new FormData()

    formData.append('name', name.current.getValue())
    formData.append('age', age.current.getValue())
    formData.append('state', state.current.getValue())
    formData.append('city', city.current.getValue())
    formData.append('fone', fone.current.getValue())
    formData.append('secFone', secFone.current.getValue())
    formData.append('email', email.current.getValue())
    formData.append('mudanca', moving.current.getValue())
    formData.append('trabalha', work.current.getValue())
    formData.append('cnh', CNH.current.getValue())
    formData.append('formacao', formacao.current.getValue())
    formData.append('challenge', challeng.current.getValue())
    formData.append('socials', socialS.current.getValue())
    formData.append('WorkEnviromentProp', WEnviPro.current.getValue())
    formData.append('decision', decision.current.getValue())
    formData.append('conflicts', conflict.current.getValue())
    formData.append('organization', organiz.current.getValue())
    formData.append('team', team.current.getValue())
    formData.append('WorkEnviromentPref', WEnviPre.current.getValue())
    formData.append('curriculo', curriFil.current.files[0])

    
  fetch(links.appscript, {
            redirect: "follow",
            method:"POST", 
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formData,
          })
          .then(response => {
            if (response.ok) {
              alert('Formulário enviado com sucesso!');
            }
          })
          .catch(error => {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
          });
  
  }


  return (
    <form action="" method="post" encType="multipart/form-data" id='candidatura' 
    onKeyDown={keyDown} onSubmit={submit} autoComplete='off' noValidate  >
      <div className="introduction">
        <h3>Currículo <span className="EmpName">GO!</span></h3>
        <p>Olá! Através deste espaço podemos conhecer você um pouco melhor, para ser possível te destinar a vaga ideal! Fique tranquilo, seus dados estão seguros conosco! </p>
        <p>Qualquer dúvida, entre em contato através do email <a href='go.consultoriaderh@gmail.com'>go.consultoriaderh@gmail.com</a></p>
        <p>Ou pelo Whatsapp <a href='55996200332'>55 9 9620-0332</a></p>
      </div>

      <Input  className="input" placeholder="Informe seu nome completo" 
              ref={name} mask={InputTypes.noSpecial} id="name" validation={InputValid.required} 
              nextRef={age.current ? age.current.getInputRef(): null} />
      <Input  className="input" placeholder="Informe sua idade"
              ref={age} mask={InputTypes.digits} id="age" validation={InputValid.required} 
              nextRef={state.current ? state.current.getInputRef(): null} />
      <Input  className="input" placeholder="Estado residente" onBlur={estadoBlur}
              ref={state} mask={InputTypes.noSpecial} id="state" validation={InputValid.required} fullList={estados} 
              nextRef={city.current ? city.current.getInputRef(): null} />
      <Input  className="input" placeholder="Cidade residente" 
              ref={city} mask={InputTypes.noSpecial} id="city" validation={InputValid.required} fullList={cidadeFiltradas} 
              nextRef={fone.current ? fone.current.getInputRef(): null} />

      <fieldset id='Contato'>
        <legend>Informações de Contato</legend>
        <Input  className="input" placeholder="Celular"
                ref={fone} mask="(00) 00000-0000" id="fone" validation={InputValid.required} 
                nextRef={secFone.current ? secFone.current.getInputRef(): null} />
        <Input  className="input" placeholder="Celular adicional"
                ref={secFone} mask="(00) 00000-0000" id="secFone" 
                nextRef={email.current ? email.current.getInputRef(): null} />
        <Input  className="input" placeholder="Informe seu email de contato"
                ref={email} containerId="email" id={"emailInp"} validation={/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/} 
                nextRef={moving.current ? moving.current.getFirst(): null} invalidAlert='Informe um endereço de email valido' />
      </fieldset>
      <fieldset id='Adicionais'>
        <legend>Informações Adicionais</legend>

        <InputRadio group="mudanca" options={["Sim", "Não"]} title="Disponibilidade para mudança?" nextRef={work.current ? work.current.getFirst(): null} ref={moving} />
        <InputRadio group="trabalha" options={["Sim", "Não"]} title="Trabalha atualmente?" nextRef={CNH.current ? CNH.current.getFirst(): null}  ref={work} />
        <InputRadio group="cnh" options={["Sim", "Não"]} title="Possui CNH?" nextRef={formacao.current ? formacao.current.getFirst(): null} ref={CNH} />
        <InputRadio group="formacao" options={["Nível Fundamental","Nível Médio","Nível Superior Incompleto","Nível Superior Completo","Pós-graduação"]} 
                    title="Formação:" containerClass='colum' nextRef={challeng.current ? challeng.current.getFirst(): null} ref={formacao} />
      </fieldset>
      <fieldset id='DISC'>
        <legend>Teste DISC</legend>

        <InputRadio group="challenge" options={["Planejo meticulosamente cada passo antes de agir", "Analiso as possibilidades e busco a melhor solução", "Procuro trabalhar em equipe para encontrar uma solução conjunta", "Tendo a agir rapidamente para resolver a situação"]}
                    title="Quando você enfrenta um desafio, tende a:" containerClass='colum' nextRef={socialS.current ? socialS.current.getFirst(): null} ref={challeng} />
        <InputRadio group="socialS" options={["Prefiro conversas mais profundas e significativas", "Gosto de ouvir diferentes pontos de vista e trocar ideias", "Sou bastante comunicativo(a) e gosto de interagir com todos", "Sou bastante extrovertido(a) e gosto de ser o centro das atenções"]}
                    title="Em situações sociais, eu geralmente:" containerClass='colum' nextRef={WEnviPro.current ? WEnviPro.current.getFirst(): null} ref={socialS} />
        <InputRadio group='WorkEnviromentProp' options={["Seguir procedimentos e regras estabelecidas","Adaptar-me facilmente a mudanças e novas situações", "Valorizar o trabalho em equipe e colaborativo", "Assumir a liderança e buscar novos desafios"]}
                    title='No ambiente de trabalho, eu sou mais propenso(a) a:' containerClass='colum' nextRef={decision.current ? decision.current.getFirst(): null} ref={WEnviPro} />
        <InputRadio group="decision" options={["Considerar os detalhes e as implicações", "Agir rapidamente com base na intuição", "Avaliar cuidadosamente todas as opções antes de decidir", "Buscar um equilíbrio entre análise e decisão rápida"]}
                    title='Ao tomar decisões importantes, você tende a:' containerClass='colum' nextRef={conflict.current ? conflict.current.getFirst(): null} ref={decision} />
        <InputRadio group='conflict' options={["Busco resolver o problema de forma diplomática e pacífica", "Analiso as causas e tento encontrar uma solução justa para todos", "Procuro ouvir todas as partes envolvidas antes de tomar uma decisão", "Tendo a agir rapidamente para resolver o conflito"]}
                    title='Quando confrontado(a) com conflitos, eu geralmente:' containerClass='colum' nextRef={organiz.current ? organiz.current.getFirst(): null} ref={conflict} />
        <InputRadio group='organization' options={["Gosto de ter um plano detalhado e seguir uma agenda rigorosa", "Sou flexível e prefiro adaptar-me conforme as necessidades surgem", "Valorizo a colaboração e a troca de ideias na hora de planejar", "Tendo a ser espontâneo(a) e me adaptar conforme a situação"]}
                    title='Em termos de organização e planejamento, eu:' containerClass='colum' nextRef={team.current ? team.current.getFirst(): null} ref={organiz} />
        <InputRadio group='team' options={["Assumo papéis específicos e cumpro minhas responsabilidades", "Contribuo com ideias e sugestões para melhorar o processo", "Colaboro ativamente e busco unir os membros da equipe", "Assumo a liderança e coordeno as atividades do grupo"]}
                    title='No trabalho em equipe, eu geralmente:' containerClass='colum'nextRef={WEnviPre.current ? WEnviPre.current.getFirst(): null} ref={team} />
        <InputRadio group='WorkEnviromentPref' options={["Ter instruções claras e seguir um plano", "Ter liberdade para explorar diferentes abordagens", "Trabalhar em equipe para tomar decisões conjuntas", "Contribuir com ideias e perspectivas únicas para projetos"]}
                    title='Em um ambiente de trabalho, você prefere:' containerClass='colum' nextRef={curriFil.current} ref={WEnviPre} />
      </fieldset>

      <div id="curriContainer">
        <label className='labelForm' htmlFor="curriculo">Insira o seu currículo aqui (PDF ou Word):</label><br />
        <input ref={curriFil} type="file" id="curriculo" name="curriculo" accept=".pdf,.doc,.docx" onKeyDown={keyDownCurri} /><br /><br />
      </div>

      <button ref={subBtn} type='submit'>Enviar</button>
    </form>
  )
}

export default candForm