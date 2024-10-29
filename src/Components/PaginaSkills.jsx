import React from 'react'
import {Link} from 'react-router-dom'

import './Skills.css';

const PaginaSkills = () => {
  return (
    <body>
        <header>
            <h1 className="skills">
                Skills
            </h1>
            <img src="../ho-salt-cat.gif" alt="gatinha" className="gata" />
        </header>
        <section>
            <div className="linguis">
                <img src="../js-javascript.gif" alt="javascript image" className="one" />
                <img src="../react.png" alt="react image" className="two" />
                <img src="../node.png" alt="node image" className="three" />
                <img src="../HTML e CSS.png" alt="HTML e CSS image" className="four" />
            </div>
        </section>
        <footer>
            <Link to='/'><img src="../placa.png" alt="placa voltar" className="voltar" /></Link>
        </footer>
    </body>
  )
}

export default PaginaSkills