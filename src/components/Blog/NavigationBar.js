import {NavLink} from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

import '../../styles/Navbar.css';

function NavigationBar(){
    
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)

    useEffect(() => {
      const handler = (e) => setMatches( e.matches );
      window.matchMedia("(min-width: 768px)").addListener(handler);
    }, []);

    const changeStyle = () => {
        let target = document.getElementById('burgerIcon');
        target.classList.toggle('active');
        let navLinks = document.getElementById('navbarLinks');
        navLinks.classList.toggle('open');
        navLinks.classList.toggle('close');
    }

    const navbar = matches ? null : (
        <Fragment>
            <div className="navbarBanner">
                <div className="burgerIcon" id="burgerIcon" onClick={changeStyle}>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
                </div>
            </div>
        </Fragment>
    );

    return(
        <nav className="navbar">    
            {navbar}
            <div className="navbarLinks close" id="navbarLinks">
                <NavLink to="/practica1" activeClassName="active" onClick={changeStyle}>Practica 1</NavLink>
                <NavLink to="/practica2" activeClassName="active" onClick={changeStyle}>Practica 2</NavLink>
                <NavLink to="/practica3" activeClassName="active" onClick={changeStyle}>Practica 3</NavLink>
                <NavLink to="/practica4" activeClassName="active" onClick={changeStyle}>Practica 4</NavLink>
                <NavLink to="/pia" activeClassName="active" onClick={changeStyle}>PIA</NavLink>
            </div>
        </nav>
    )
}

export default NavigationBar;