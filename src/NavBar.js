import React from 'react'
import ep_logo from './ep_enduro_logo.svg';
import './NavBar.css';


export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                       EP Enduro
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/races">Races</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactus">Contact Us</a> 
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/donate">Donate</a>
                        </li>
                        </ul>

                       <ul class="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/epduro/"  target="_blank"><i className="fab fa-facebook"></i></a></li>

                            <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/ependuro/"  target="_blank"><i className="fab fa-instagram"></i></a></li>


                        </ul>




                    </div>
                </div>
            </nav>
        </div>
    )
}
