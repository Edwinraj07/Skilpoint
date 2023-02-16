import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-scroll'
import { Button } from 'bootstrap';
import "./home.css";
import "./Menu.css"



export function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navout">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
    
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link spy={true} smooth={true} duration={700} to="home" className="btn navout1">Home</Link>
      </li>
      <li class="nav-item">
      <Link spy={true} smooth={true} duration={700} to="category" className="btn navout1">Category</Link>
      </li>
      <li class="nav-item">
      <Link spy={true} smooth={true} duration={700} to="skillset" className="btn navout1">About Us</Link>
      </li>
      <li class="nav-item">
      <Link spy={true} smooth={true} duration={700} to="contact" className="btn navout1">Contact</Link>
      </li>
      <li class="nav-item">
      <Link spy={true} smooth={true} duration={700} to="faq" className="btn navout1">FAQ</Link>
      </li>
      <li class="nav-item">
      <button className='btn lbtn text-white'>Login</button>
      </li>
      <li class="nav-item">
      <button className='btn regbtn text-white'>Register</button>
      </li>
    </ul>
  </div>
</nav>
        </>
    );
}