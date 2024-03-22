import { useState, useEffect } from 'react'
import React from 'react';

//CSS
import './CSS/CandForm.css'

function CandForm() {
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
        .then(response => response.json())
        .then(data => {
            const nomesCidades = data.map(cidade => cidade.nome);
            setCidades(nomesCidades);
        })
        .catch(error => console.error('Erro ao obter cidades:', error));
    }, []);


  return (
    <form action="" method="post" encType="multipart/form-data" id='candidatura'>
        {/*<label htmlFor="nome">Nome Completo:</label><br />*/}
        <input type="text" placeholder="Nome Completo" className='input' id="nome" name="nome" required /><br /><br />

        <input type="number" placeholder='Idade' className='input' id="idade" name="idade" required /><br /><br />

        <input type="text" placeholder='Cidade em que reside' className='input' id="cidade" name="cidade" list='cidades' autoComplete='off'  required /><br /><br />
        <datalist id='cidades'>
            {cidades.map((cidade, index) => {
                return <option key={index} value={cidade} />
            })}
        </datalist>

        <input type="text" placeholder='Vaga que gostaria de se candidatar' className='input' id="vaga" name="vaga" required /><br /><br />

        <label htmlFor="mudanca">Disponibilidade para mudança?</label><br />
        <input type="radio" id="sim_mudanca" name="mudanca" value="sim" />
        <label htmlFor="sim_mudanca">Sim</label>
        <input type="radio" id="nao_mudanca" name="mudanca" value="nao" />
        <label htmlFor="nao_mudanca">Não</label><br /><br />

        <label htmlFor="trabalha">Trabalha atualmente?</label><br />
        <input type="radio" id="sim_trabalha" name="trabalha" value="sim" />
        <label htmlFor="sim_trabalha">Sim</label>
        <input type="radio" id="nao_trabalha" name="trabalha" value="nao" />
        <label htmlFor="nao_trabalha">Não</label><br /><br />

        <label htmlFor="cnh">Possui CNH?</label><br />
        <input type="radio" id="sim_cnh" name="cnh" value="sim" />
        <label htmlFor="sim_cnh">Sim</label>
        <input type="radio" id="nao_cnh" name="cnh" value="nao" />
        <label htmlFor="nao_cnh">Não</label><br /><br />

        <label htmlFor="telefone">Telefone para Contato:</label><br />
        <input type="tel" id="telefone" name="telefone" required /><br /><br />

        <label htmlFor="formacao">Formação:</label><br />
        <textarea id="formacao" name="formacao" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="ambientes">Como se sente em ambientes sociais?</label><br />
        <textarea id="ambientes" name="ambientes" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="decisoes">Como costuma abordar decisões importantes na vida?</label><br />
        <textarea id="decisoes" name="decisoes" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="novidade">Como se sente em relação ao desconhecido e à novidade?</label><br />
        <textarea id="novidade" name="novidade" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="estresse">Qual é a sua reação típica em situações estressantes?</label><br />
        <textarea id="estresse" name="estresse" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="tempo-livre">O que costuma fazer no seu tempo livre?</label><br />
        <textarea id="tempo-livre" name="tempo-livre" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="mudancas">Como se sente em relação a mudanças em sua vida?</label><br />
        <textarea id="mudancas" name="mudancas" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="valoriza">O que mais valoriza em um trabalho?</label><br />
        <textarea id="valoriza" name="valoriza" rows="4" cols="50" required></textarea><br /><br />

        <label htmlFor="curriculo">Insira o seu currículo aqui (PDF ou Word):</label><br />
        <input type="file" id="curriculo" name="curriculo" accept=".pdf,.doc,.docx" required /><br /><br />

        <input type="submit" value="Enviar" />
    </form>
  );
}

export default CandForm;
