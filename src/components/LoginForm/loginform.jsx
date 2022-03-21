import React from 'react'
import './Loginform.css'
import logo from '../../assets/logo3.png'
import mobile from '../../assets/mobile_apps1.svg'
import pc from '../../assets/pc.svg'
const Loginform = () => {
  return (
      <div className="form-container">
          <div className="form-description">
            <div style={{textAlign:"center",position:"relative",
    width: "100%",
    display: "flex",
    height: "50%",
    justifyContent:"center"

}}>
              <img className='mobile' src={mobile} alt="" />
            </div>
            <div style={{textAlign:"center" ,width:'92%',   height:"32%", fontFamily:" 'Dosis', sans-serif",
}}>
<div>

  <h1 style={{marginTop:"20px"}}>Pour obtenir un compte et bénéficier de nos services, consultez l'administration ...</h1>
</div>
  <div style={{    display: "flex",
    alignItems: "end", justifyContent:"center",
    height: "68%",    width: "100%"}}>
                <p style={{    width:" 80%"}}>
              Cet espace a été conçu afin d'aider les parent à mieux accompagner leurs jeunes dans les diverts apprentissages au quotidient en collaborant avec les enseignants et l'adminstration
              </p>
    </div>
            </div>
          </div>
          <div className="form">
              <div className="form-logo">
                <img src={logo} alt="form-logo" />
              </div>
              <h2>Soyez la Bienvenue!</h2>
              <p>Merci d'introduire vos coordonnées afin d'acceder à votre espace parent</p>
              <div>
            <form action="" autocomplete="off">
              <input type="email"  placeholder='email' autocomplete="off"/>
              <input type="password"  placeholder='mot de passe' autoComplete="off"/>
            </form>
              </div>
              <div style={{display:"flex"}}>
                <span className="remember">
                  se souvenir de moi
                  </span> 
                <input type="checkbox" id="checkbox" style={{marginTop: "7px",marginLeft: "7px"}}/>

              </div>
              <div className="bouton logo-btn">
                Login
              </div>

              <div>
              Avez-vous rencontré un problème ? <a style={{cursor:"pointer"}}>
                Contatez nous
                </a>
              </div>
          </div>
      </div>
  )
}

export default Loginform