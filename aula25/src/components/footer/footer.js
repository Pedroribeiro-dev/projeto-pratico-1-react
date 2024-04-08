import React from "react";
import Logo from '../../assets/imgs/images-removebg-preview.png'
import './style.css'
function Footer(){
    return(
        <div className="footer-container">
        <div className="footer-content">
            <img id="logo" src={Logo}/>
            <p id="direito">Todos os direitos reservado ©</p>
            <p id="desenvolvido">Desenvolvido por: Pedro Ribeiro</p>

        </div>
    </div>
    )
}

export default Footer;