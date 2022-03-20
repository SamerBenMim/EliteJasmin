import React,{useState} from 'react'
import "./toggle.css"
import SideNav  from '../sideNav/sideNav';

const X = () => {
    const [state, setstate] = useState("")
    return (
        <div className='X' onClick={()=>{(!state)?setstate("open"):setstate("")}}>
            <div className={`menu-btn ${state}`} >
            <div className="middle-menu-btn"></div>
            </div> 
            <SideNav open={state}/>
        </div>
    )
}

export default X