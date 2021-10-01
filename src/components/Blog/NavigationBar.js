import {NavLink} from 'react-router-dom';

import '../../styles/Navbar.css';

function NavigationBar(){
    return(
        <nav className="navbar">
            <NavLink to="/practica1" activeClassName="active">Practica 1</NavLink>
            <NavLink to="/practica2" activeClassName="active">Practica 2</NavLink>
            <NavLink to="/practica3" activeClassName="active">Practica 3</NavLink>
            <NavLink to="/practica4" activeClassName="active">Practica 4</NavLink>
            <NavLink to="/pia" activeClassName="active">PIA</NavLink>
        </nav>
    )
}

export default NavigationBar;