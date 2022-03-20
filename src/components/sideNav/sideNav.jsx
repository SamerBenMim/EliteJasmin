import React,{useState} from 'react'
import './sideNav.css'
export const SideNav = ({open}) => {
  return (
        <div className={`SideNav ${open}Nav`} 
               >
            <div className="menuItem">
                <div className="options"> 
                <div className="option side">ACCEUIL</div>
                <div className="option side">A propos de nous</div>
                <div className="option side">espace parent</div>
                <div className="option side">poles d'activites</div>
                <div className="option side">contact</div>
            </div>
            </div>
        </div>
    )
}
export default SideNav
