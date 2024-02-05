
import { NavLink } from "react-router-dom";

import "./style.css";

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";


function Navbar(){

  const activeLink="nav_list__link nav_list__link-active";
  const normalLink="nav_list_link";


    return(

    <nav className="nav">
      <div className="containerd">
        <div className="nav-row">
          <NavLink to="/" className="logo"><strong>Freelancer</strong> portfolio</NavLink>" 
          
           <BtnDarkMode />

          <ul className="nav-list">

                    <li className="nav-list__item">
                      <NavLink to="/" className={(isActive)=>

                         isActive ? activeLink : normalLink

                      }>Home</NavLink>
                      </li>

                    <li className="nav-list__item">
                      <NavLink to="/projects" className={(isActive)=>
                      isActive ? activeLink : normalLink }>Projects</NavLink>
                      </li>


                    <li className="nav-list__item">
                      <NavLink to="/contacts" className={(isActive)=>
                       isActive ? activeLink : normalLink
                      }>Contacts</NavLink>
                      </li>

                </ul>
        </div>
      </div>
    </nav> 
    )
}

export default Navbar