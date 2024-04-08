import React, { useContext} from "react";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../contexts/login/login";
import Logo from '../../assets/imgs/images-removebg-preview.png'


function Header() {
    const { login, setLogin } = useContext(LoginContext)
    const UserLogar= useNavigate()
    const usuario = ()=>{
        if(login){
            UserLogar('/')
            setLogin(!login)
        }else{
            UserLogar('/home/logado')
            setLogin(!login)
        }
    }
   
    return (
        <header className="header">
            <img id="logo" src={Logo}/>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link to='/fotos'>
                        <li>FOTOS</li>
                    </Link>
                    <Link to='/contatos'>
                        <li>CONTATOS</li>
                    </Link>                   
                        <li onClick={usuario}>{login ? 'LOGADO' : 'LOGIN'}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;