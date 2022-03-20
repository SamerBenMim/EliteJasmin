import React from 'react'
import Boule from '../boule/boule'
import './boules.css'
import bus from "./../../assets/autobus.png"
import social from "./../../assets/social.png"
import fourchette from "./../../assets/cuillaire.png"
const Boules = () => {
  return (<>        <h3>Notre ecole dispose de</h3>
  <br/>
  <br/>
    <div className='boule-container' >
        <Boule src={fourchette} color="#097677" title="Menus équilibrés" description="erunt. Non qui dolor laborum do dolore sit pariatur. Aute veniam id eu in sunt."/>
        <Boule src={bus} color="#fbc70f" title="Transport confortable" description="erunt. Non qui dolor laborum do dolore sit pariatur. Aute veniam id eu in sunt."/>
        <Boule src={social} color="#cd9ca6" title="Environnement motivant" description="erunt. Non qui dolor laborum do dolore sit pariatur. Aute veniam id eu in sunt."/>
        <Boule src="https://www.groupescolairebenabdallah.ma/wp-content/uploads/2017/09/A04.svg" color="#9e5378" title="Nombreux activités" description="erunt. Non qui dolor laborum do dolore sit pariatur. Aute veniam id eu in sunt."/>
        
    </div>
  </>
    )
}

export default Boules