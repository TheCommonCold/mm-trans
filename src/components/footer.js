import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import ContactSection from './contactSection'

function Footer() {
    return (
        <footer>
            <ContactSection />
            <Container>
                <hr />
                <p>© 2020 MM-Trans</p>
            </Container>
        </footer>
    );
}

export default Footer;
