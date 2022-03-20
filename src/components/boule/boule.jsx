import React from 'react'
import './boule.css'
const Boule = ({title,description,src,  color}) => {
  return (
<div className='block-boule'>
<div className="col-md-3 home-maternelle-services-item" style={{background:color}}>
<div className="home-maternelle-services-item-icon" > 
<img className="lazy-loaded"  data-src="https://www.groupescolairebenabdallah.ma/wp-content/uploads/2017/09/A02.svg" alt="" src={src}/>
</div>
</div>  
<div style={{width:"60%",marginTop:"10px"}}>
<h2 className="titre" style={{color:color}}>{title}</h2>
<div className="description">
<p>{description}</p>
</div>
</div>
</div>

        )
}

export default Boule