import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive,setNavActive] = useState(0)

  const changeNavState = (index) => {
    setNavActive(index)
  }

  const navDisabledClass = "nav-link"
  const navActiveClass = "nav-link active"


  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"white"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to='/' onClick={()=>changeNavState(0)}>
            <img src="media/images/logo.svg" style={{width:"25%"}} alt="Logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <a class={navActive==1?navActiveClass:navDisabledClass} onClick={()=>changeNavState(1)} aria-current="page" href='http://localhost:3000/'>
                Signup
                </a>
              </li>
              <li class="nav-item">
                <Link class={navActive==2?navActiveClass:navDisabledClass} onClick={()=>changeNavState(2)} to='/about'>
                About
                </Link>
              </li>
              <li class="nav-item">
                <Link class={navActive==3?navActiveClass:navDisabledClass} onClick={()=>changeNavState(3)} to='/product'>
                Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class={navActive==4?navActiveClass:navDisabledClass} onClick={()=>changeNavState(4)} to='/pricing' aria-disabled="true">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class={navActive==5?navActiveClass:navDisabledClass} onClick={()=>changeNavState(5)} to='/support' aria-disabled="true">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
