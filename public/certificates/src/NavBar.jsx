import "./NavBar.css";

function NavBar(){
    return(
        <header> 
            <div>
              <span>PORTFOLIO</span>
            </div>
            <div>
                <nav>
                   <a href="#about"> <ul>About</ul></a>
                   <a href="#skills"> <ul>Skills</ul></a>
                    <a href="#certificate"><ul>Cerfications</ul></a>
                    <a href="#project"><ul>Projects</ul></a>
                    <a href="#contact"> <ul>Contact</ul></a>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;