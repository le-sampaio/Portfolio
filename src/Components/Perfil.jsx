import React from 'react'
import { Link } from 'react-router-dom'
import './Perfil.css'

function Perfil() {
  return (
    <body>
      <img src="../hey-hi-unscreen.gif" alt="dog-Hi" className="Hi" />
    <header>
        <h1>Leticia Sampaio</h1>
    </header>
    <section>
        <div className='txtmini'>Front-end developer</div>
        <div className="botoes">
            <Link to="/Projetos" id='btnProjetos'>Projetos</Link>
            <Link to="/Skills" id='btnSkills'>Skills</Link>
            <a href="https://github.com/le-sampaio" target="_blank" id='btnGithub'>GitHub</a>
            <a href="http://www.linkedin.com/in/leticia-sampaio-646975236"  target="_blank" id='btnLinkedIn'>LinkedIn</a>
            <a href="mailto:leticia.souzza14|@gmail.com" id='btnContato'>Contato</a>
        </div>
    </section>

    <footer>
        <p>&copy;LeticiaSampaio</p>
    </footer>
            <img src="../dog-walking-unscreen.gif" alt="cachorro" className="cachorro" />

    </body>

  )
}

export default Perfil