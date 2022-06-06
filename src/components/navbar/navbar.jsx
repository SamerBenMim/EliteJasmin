import React,{useState} from 'react'
import './navbar.css'
import Toggle from '../../components/toggle button/toggle'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {

  const [active, setActive] = useState(1) 

//   {
//     name :"",
    

//   }
// setActive(10)

  return (
<div className="navbar">
    <div className="logo">
    <img className="Logo-img"
     src={Logo}
     alt="logo"/>
    </div>
    <div className="menu">
         <Link to="/EliteJasmin" className={ (active==1) ? "active" :"option"  } 
        onClick={()=>{setActive(1);}}
         >Acceuil</Link>
        <Link to="/EliteJasmin" className={ active==2 ? "active" :"option"  } onClick={()=>{setActive(2);document.querySelector(".strategy").scrollIntoView({behavior: "smooth"});}}
        >A propos de nous</Link> 
        <Link to="/EliteJasmin" className={ active==4 ? "active" :"option"  } onClick={()=>{setActive(4)}}>contact</Link>
        <Link  to="/EliteJasmin" className={ active==3 ? "active" :"option"  } onClick={()=>{setActive(3)}}
        >poles d'activites</Link>
        <Link to="/EliteJasmin/login" className={active==5 ? "active" :"option"} style={{ marginRight: '85px'}}onClick={()=>{setActive(5)}}>espace parent</Link> 
      </div>
    <Toggle/>

</div> 
 )
}

export default Navbar