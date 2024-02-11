import React from "react";
import './Header.css';
import smallRight from '../pictures/small-right.png'
import smallLeft from '../pictures/small-left.png'
import search from '../pictures/search.png'

const Header = () => {
    return (
        <nav className="header_navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt=""/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt=""/>
                </button>
            </div>
                <div className="header_search">
                    <img src={search} alt=""/>
                    <input type="text" id="search_input" maxlength="300" placeholder="O que você quer ouvir?"/>
                </div>
                <div className="header_login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
        </nav>
        
    );
}

export default Header;