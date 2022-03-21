import React,{useState} from 'react'
import './navbar.css'
import Toggle from '../toggle button/toggle'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {

  const [active, setActive] = useState(1)  
  return (
<div className="navbar">
    <div className="logo">
    <img className="Logo-img"
     src={Logo}
     alt="logo"/>
    </div>
    <div className="menu">
          <nav>

          </nav>
         <Link to="/" className={ (active==1) ? "active" :"option"  } 
        onClick={()=>{setActive(1)}}
         >Acceuil</Link>
        <Link to="/" className={ active==2 ? "active" :"option"  } onClick={()=>{setActive(2)}}
        >A propos de nous</Link> 
        <Link  to="/login" className={ active==3 ? "active" :"option"  } onClick={()=>{setActive(3)}}
        >espace parent</Link>
        <Link to="/" className={ active==4 ? "active" :"option"  } onClick={()=>{setActive(4)}}>poles d'activites</Link>
        <Link to="/" className={active==5 ? "active" :"option"} style={{    marginRight: '85px'}}onClick={()=>{setActive(5)}}>contact </Link>
    </div>
    <Toggle/>

</div> 
 )
}

export default Navbar