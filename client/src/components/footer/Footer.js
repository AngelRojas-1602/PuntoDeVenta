import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'


const Footer = () => {
    return (
        <footer className="footer">
        <div className="div-1">Si quieres Contactarnos da <Link to="/contact"> Click aqui</Link> </div>
        <div className="div-2">© Derechos Reservados 2020 - 2022 | Angel Rojas</div>

        

        </footer>
    )
}

export default Footer