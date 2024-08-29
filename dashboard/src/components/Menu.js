import React, {useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuActive,setMenuActive] = useState(0)
  const [isProfileDropActive,setIsProfileDropActive] = useState(false)

  const handleMenuActivation = (index) =>{
    setMenuActive(index)
  }

  const handleProfileDrop = () =>{
    setIsProfileDropActive(!isProfileDropActive)
  }

  const menuActiveClass = "menu selected"
  const menuClass = "menu"

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to='/'
              style={{textDecoration:"none"}}
              onClick={()=>handleMenuActivation(0)}
            >
              <p className={menuActive==0?menuActiveClass:menuClass} >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              to='/orders'
              style={{textDecoration:"none"}}
              onClick={()=>handleMenuActivation(1)}
            >
              <p className={menuActive==1?menuActiveClass:menuClass} >Orders</p>
              </Link>
          </li>
          <li>
            <Link
                to='/holdings'
                style={{textDecoration:"none"}}
                onClick={()=>handleMenuActivation(2)}
              >
                <p className={menuActive==2?menuActiveClass:menuClass} >Holdings</p>
            </Link>
          </li>
          <li>
            <Link
                to='/positions'
                style={{textDecoration:"none"}}
                onClick={()=>handleMenuActivation(3)}
              >
                <p className={menuActive==3?menuActiveClass:menuClass} >Positions</p>
            </Link>
          </li>
          <li>
            <Link
              to='/funds'
              style={{textDecoration:"none"}}
              onClick={()=>handleMenuActivation(4)}
            >
              <p className={menuActive==4?menuActiveClass:menuClass} >Funds</p>
            </Link>
          </li>
          <li>
            <Link
              to='/apps'
              style={{textDecoration:"none"}}
              onClick={()=>handleMenuActivation(5)}
            >
              <p className={menuActive==5?menuActiveClass:menuClass} >Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={()=>handleProfileDrop()}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
          {isProfileDropActive}
        </div>
      </div>
    </div>
  );
};

export default Menu;
