import React from 'react'
import './StafCard.css'
const StafCard = ({nom,position,description}) => {
  return (
    <div className="cardCont">
        <div className="cardHead">
            <h1>
                John Doe     
            </h1>
        </div>
        <div className="cardImg">

        </div>
        <div className="cardFoot">
        <h1>
            sécretaire
        </h1>
        </div>
    </div>
  )
}

export default StafCard