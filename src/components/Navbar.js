import {React,useS} from 'react'
import './Navbar.css';


const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
            <a className="navbar-brand ms-5" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-5 fw-medium">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                <a className="nav-link" href="#">About Us</a>
                <a className="nav-link" href="#">Register</a>
            </div>
            </div>
        </div>
    </nav>
)
}

export default Navbar;
