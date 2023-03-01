import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler
} from 'reactstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../logo.png'

function Topbar() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar color="dark" expand="md" className="sticky-topbar shadow">
            <NavbarBrand className="mr-auto" href="/"><img id='logo' src={logo} alt='logo'></img></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="burger">
                <GiHamburgerMenu size={40}/>
            </NavbarToggler>
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="text-white" navbar>
                    <NavItem>
                        <NavLink className="text-white" href="/">Start</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="/uslugi">Usługi</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="/maszyny">Maszyny</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="/kruszywa">Kruszywa</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="/kontakt">Kontakt</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Topbar;
