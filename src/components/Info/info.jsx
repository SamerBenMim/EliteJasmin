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
            Le groupe ELITE des Jasmins est un établissement scolaire privé fondé en 2010, qui accueille plus de xxxx élèves répartis entre la maternelle, le primaire et bientot le collège.
            Notre établissement enseigne le programme du Ministère de l'éducation nationale Tunisien a travers des instituteurs compétents , créatifs et bien expérimentés qui se dévouent à  l'acquisition de connaissances scientifiques et littéraires en se basant sur des méthodes et des outils informatiques modernes, notre staff est déterminé à créer un environnement d'apprentissage motivant et adapté aux besoins de chaque enfant, élargit l'éventail de ses activités et fonde un établissement scolaire à programme trilingue ainsi qu'un ensemble d'activités diversifiés sportifs et intellectuels sculptant la personnalité de notre enfant tout en collaborant avec les parents et la societé

            </p>
            <img className='tun' src={tun} alt="img" />
        </div>
    </div>
    </div>
  )
}

export default Info