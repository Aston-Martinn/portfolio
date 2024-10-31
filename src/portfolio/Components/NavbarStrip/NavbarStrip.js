"use client";

import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Styles from './NavbarStrip.module.css';

const NavbarStrip = () => {
    return (
        <Navbar bg="black" className='text-light ps-3' expand="lg" fixed='top'>
            <Container className={`p-2 ${Styles.divider}`}>
                <span className={Styles.email}>
                    <MdEmail className='me-2' />
                    advaithbhat9@gmail.com
                </span>
                <Navbar.Toggle aria-controls={`basic-navbar-nav`} className={Styles.toggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Link href="https://github.com/Aston-Martinn" passHref legacyBehavior>
                            <Nav.Link className='text-light'>
                                <FaGithub />
                            </Nav.Link>
                        </Link>
                        <Link href="https://t.me/advaithbhat" passHref legacyBehavior>
                            <Nav.Link className='text-light'>
                                <FaTelegram />
                            </Nav.Link>
                        </Link>
                        <Link href="https://www.instagram.com/advaith_bhat_/profilecard/?igsh=MWtvdmQzbmttY3hk" passHref legacyBehavior>
                            <Nav.Link className='text-light'>
                                <FaInstagram />
                            </Nav.Link>
                        </Link>
                        <Link href="https://www.linkedin.com/in/advaith-bhat-b4214a193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" passHref legacyBehavior>
                            <Nav.Link className='text-light'>
                                <FaLinkedinIn />
                            </Nav.Link>
                        </Link>
                        <Link href="https://x.com/Advaith_Bhat?t=whg8EFKXZ0H4pSPBmQqFwQ&s=08" passHref legacyBehavior>
                            <Nav.Link className='text-light'>
                                <FaXTwitter />
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarStrip;