import React from 'react'
import './staff.css'
import data from "../../data/staff data/staff-data"
import StafCard from '../stafCard/StafCard'
import manager from '../../assets/manager.jpg'
import swing from '../../assets/iss_18279_17703.png'
const Staff = () => {
  return (
<div className=' staff-wrap'>
<h3  style={{marginTop:"100px",color:"rgb(6 101 193)",fontSize:"50px"}}>Découvrez notre équipe</h3>

    <div style={{marginTop:"30px",marginBottom:"50px"}}>
    {/* <img src={manager} alt="directeur" /> */}
    <StafCard name={"John Doe"} position={"Directeur"} src={manager} description={"aaa"} width="240px" height="280px" />
    {/* <img src={swing} style={{    position: "absolute",
    top:" 3463px",
    left: "357px"}} alt="img" /> */}

    </div>
    <div className='staff-container'>

      
        {/* <div className='staff-block'> */}
        {data.map(p=><StafCard name={p.nom} position={p.position} src={p.img} description={p.description} />)}
        {/* </div> */}
        {/* <div className='staff-block'>
        {data.map(p=>{ if (p.id<10 && p.id>4 ) return <StafCard name={p.nom} position={p.position} img={p.img} description={p.description} />})}
    </div> */}
    </div>
    </div>
  )
}

export default Staff