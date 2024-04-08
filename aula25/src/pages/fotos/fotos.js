import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './style.css'

function Fotos() {
    return (
        <>
        <Header />
        <div className="foto-container">
            <div className="foto-content">
                <div className="fotos foto1" ></div>
                <div className="fotos foto2" ></div>
                <div className="fotos foto3" ></div>
                <div className="fotos foto4" ></div>
                <div className="fotos foto5" ></div>
                <div className="fotos foto6" ></div>
            </div>
        </div>
        <Footer/>
       </>
       
    )
}

export default Fotos;
