import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Container from 'react-bootstrap/Container';
import Logo from '../assets/img/logo2.png' 


export default function Navbars() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className={setActiveClass} to="/">
                    <img src={Logo} height={45} width={150}></img>
                   
                </Navbar.Brand>
                <Nav className="right">
                    <NavLink className={`me-3 ${setActiveClass}`} to="/"> <a>Home</a></NavLink>
                    <NavLink className={setActiveClass} to="/pokemones"> Pokemones </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}
