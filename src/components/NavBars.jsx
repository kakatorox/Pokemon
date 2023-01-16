import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Container from 'react-bootstrap/Container';


export default function Navbars() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className={setActiveClass} to="/">Pokemones</Navbar.Brand>
                <Nav className="right">
                    <NavLink className={`me-3 ${setActiveClass}`} to="/"> Home </NavLink>
                    <NavLink className={setActiveClass} to="/pokemones"> Pokemones </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}
