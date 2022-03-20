import React from 'react'
import './info.css'
import tun from '../../assets/education-tunisie.png'
import pic from '../../assets/132173357_205618284544325_5043715956236823664_n.jpg'
const Info = () => {
  return (
    <div className="container">
    <div className="left-block">

    <img src= {pic} alt="pic"  className='pic' />
    </div>
    <div className='right-block'>
        <h1 className='info_title'>Groupe l'Elite des Jasmins</h1>
        <div style={{width:"40px", marginBottom:"20px", borderRadius:"650px", backgroundColor:"red",height:"4px"}}></div>
        <div className='content'>
            <p style={{fontSize:"20px",}}>
             commodo anim labore minim veniam amet do. Et nulla ad et ipsum est tempor dolore nostrud. Mollit mollit labore ut aliquip commodo labore deserunt reprehenderit et amet. Commodo nisi ea ipsum officia nostrud aute. Veniam proident eu do in veniam do nostrud exercitation labore.
            Ad fugiat quis incididunt nulla labore cillum velit officia nisi proident. Veniam cupidatat cupidatat officia incididunt ut commodo anim labore minim veniam amet do. Et nulla ad et ipsum est tempor dolore nostrud. Mollit mollit labore ut aliquip commodo labore deserunt reprehenderit et amet. Commodo nisi ea ipsum officia nostrud aute. Veniam proident eu do in veniam do nostrud exercitation labore.
            </p>
            <img className='tun' src={tun} alt="img" />
        </div>
    </div>
    </div>
  )
}

export default Info