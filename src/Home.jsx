import { Link } from "react-router-dom";

//Components
import Header from './FirstDegree/header.jsx'
import Segment from './FirstDegree/body.jsx'

//CSS
import './CSS/Home.css'

function App() {
  const Menu =  <>
                  <li><a href="#SobreNos">Sobre nós</a></li>
                  <li><a href="#Servicos">Serviços</a></li>
                  <li><Link to="/joblist">Nossas Vagas</Link></li>
                </>

  return (
    <>
      <Header MenuD={Menu} MenuBtn={true}/>
      <Segment />
    </>
  )
}

export default App
