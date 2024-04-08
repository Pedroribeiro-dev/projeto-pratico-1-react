import React from "react";
import Header from "../../components/header/header";
import './style.css';
import Filme from '../../assets/videos/BATMAN _ Trailer 3 Oficial Dublado.mp4'
import Footer from "../../components/footer/footer";


function Home() {
    return (
        <>
            <Header />
            <div className="bannerPrincipal"></div>
            <div className="main-container">
                <div className="main-content">
                    <video id="video-filme" controls>
                        <source src={Filme} type="video/mp4" />
                        seu navegador nao tem suporte pra video
                    </video>
                    <p id="sinopse">  Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                        mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece
                        como a personificação da vingança para a população.</p>
                </div>
            </div>
            <div className="character-container">
                <div className="character-content">
                    <div className="cards card1">zoe kravitz-Mulher Gato</div>
                    <div className="cards card2">Robert Patison-Batman</div>
                    <div className="cards card3">Jefrey Wright-Gordon</div>
                </div>
            </div>
            <Footer/>
        </>

    );
}

export default Home;