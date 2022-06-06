import React,{useState} from 'react'
import './sideNav.css'
import {Link} from 'react-router-dom'

export const SideNav = ({open}) => {
    const [active, setActive] = useState(1)  

  return (
        <div className={`SideNav ${open}Nav`} 
               >
            <div className="menuItem">
                <div className="options"> 
                <div className="option side"><Link to="/EliteJasmin" className={ (active==1) ? "active" :"option"  } 
        onClick={()=>{setActive(1)}}>ACCEUIL</Link></div>
                <div className="option side"><Link to="/EliteJasmin" className={ (active==2) ? "active" :"option"  } 
        onClick={()=>{setActive(2)}}>A propos de nous</Link></div>
                <div className="option side"><Link to="/EliteJasmin" className={ (active==3) ? "active" :"option"  } 
        onClick={()=>{setActive(3)}}>contact</Link></div>
                <div className="option side"><Link to="/EliteJasmin" className={ (active==4) ? "active" :"option"  } 
        onClick={()=>{setActive(4)}}>poles d'activites</Link></div>
                <div className="option side"><Link to="/EliteJasmin/login" className={ (active==5) ? "active" :"option"  } 
        onClick={()=>{setActive(5)}}>espace parent</Link></div>
            </div>
            </div>
        </div>
    )
}
export default SideNav
