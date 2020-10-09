import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from '../logo.png'

function Topbar() {
    return (
        <Navbar color="dark" expand="md" className="sticky-top shadow">
            <NavbarBrand className="mr-auto" href="/"><img id='logo' src={logo} alt='logo'></img></NavbarBrand>
            <Nav navbar>
                <NavItem>
                    <NavLink href="/">Start</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/uslugi">Usługi</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/maszyny">Maszyny</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/kruszywa">Kruszywa</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/kontakt">Kontakt</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Topbar;
