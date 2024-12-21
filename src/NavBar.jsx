import "./NavBar.css";
import { useState } from "react";
function NavBar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header> 
            <div>
              <span>PORTFOLIO</span>
            </div>
            <div className="nav-toggle" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
                <nav className={isMenuOpen ? "active" : ""}>
                   <a href="#about"> <ul>About</ul></a>
                   <a href="#skills"> <ul>Skills</ul></a>
                    <a href="#certificate"><ul>Cerfications</ul></a>
                    <a href="#project"><ul>Projects</ul></a>
                    <a href="#contact"> <ul>Contact</ul></a>
                </nav>
        </header>
    );
}

export default NavBar;