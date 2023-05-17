import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import SearchBar from "./SearchBar.js"
import lockup1_black_text from "../assets/images/lockup1_black_text.svg"

function Header() {
    
  return (
    <nav>
      <nav id="navbar" class="">
        <SearchBar />
        <div class="nav-wrapper">
        <li><a href="#home" >Home</a></li>
        {/*<div className="logo">*/}
        {/*  <img src={lockup1_black_text} height="80px"/>*/}
        {/*</div>*/}
        </div>
      </nav>

      <div class="menuIcon">
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>


      <div class="overlay-menu">
        <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
      
      
    </nav>
  );
}
export default Header;