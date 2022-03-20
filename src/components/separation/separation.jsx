import React from 'react'
import './separation.css'
const Separation = () => {
  return (
    <div className='separation'>
        <div >
            <div className='text'>vous êtes parent ou élève?</div>
            <a className="bouton">se connecter</a>

        </div>
        <div>
            <div>
            <div className='text'>vous êtes enseignant?</div>
            <a className="bouton">postuler</a>

            </div>
        </div>
    </div>
    )
}

export default Separation