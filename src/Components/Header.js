import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { BrowserRouter as Router } from "react-router-dom";

import React from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar bg="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {" "}
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#chile"
                className={
                  activeLink === "chile" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("chile")}
              >
                Chile
              </Nav.Link>
               <Nav.Link
                href="#internacional"
                className={
                  activeLink === "internacional" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("internacional")}
              >
                Internacional
              </Nav.Link>
                 <Nav.Link
                href="#deportes"
                className={
                  activeLink === "deportes" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("deportes")}
              >
                Deportes
              </Nav.Link>
               <Nav.Link
                href="#humor"
                className={
                  activeLink === "humor" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("humor")}
              >
                Humor
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
