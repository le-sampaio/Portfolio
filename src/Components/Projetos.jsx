import React from 'react'
import { Link } from 'react-router-dom'

import './Projeto.css'

const Projetos = () => {
  return (
    <body>
      <header>
        <h1 className='titulo'>Projetos</h1>
        <img src="../piske-usagi.gif" alt="pato-gif" className="pato" />
      </header>
      <section>
        <div className="projetos">
          <a href="https://summary-result-chi.vercel.app/"  target='_blank' className="primeiro">Summary Result</a>
          <a href="https://to-do-list-umber-ten-22.vercel.app/" target='_blank'  className="segundo">To Do List</a>
          <a href="https://movie-finder-phi-nine.vercel.app/" target='_blank'  className="terceiro">Movie Finder</a>
          <a href="https://weather-app-eta-one-60.vercel.app/"  target='_blank' className="quarto">Weather App</a>
          <a href="https://iteractive-rating-component.vercel.app/" target='_blank'  className="quinto">Iteractive Rating</a>
        </div>
      </section>
      <Link to = '/' ><img src="../placa.png" alt="arrow back" className='placa' /></Link>
    </body>
  )
}

export default Projetos