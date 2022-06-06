import React from 'react'
import'./footer.css'
import address from "../../assets/addressIcon.svg"
import mob from "../../assets/phone.svg"
import message from "../../assets/message.svg"
import fb from "../../assets/fb.svg"
import insta from "../../assets/insta.svg"
import ytb from "../../assets/ytb.svg"
import google from "../../assets/google.svg"
import twitter from "../../assets/twitter.svg"
import Iframe from 'react-iframe'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-title'>
            <h1 style={{color:'white',fontSize:"30px"}}> L'ELITE</h1>
        A votre disposition pour tout complément d’informations
        </div>
        <div className='footer-contact-us'>
        <div className='media-cont'>        
            <div className="fb"><img src={fb} style={{width:"17px"}}alt="adress" /></div>
            <div className="fb"><img src={twitter} style={{width:"17px"}}alt="adress" /></div>
            <div className="fb"><img src={insta} style={{width:"17px"}}alt="adress" /></div>
            <div className="fb"><img src={ytb} style={{width:"17px"}}alt="adress" /></div>
            <div className="fb"><img src={google} style={{width:"17px"}}alt="adress" /></div>

        </div>
        </div>
        <div className="footer-main">
            <div className="footer-contacts">
                <div className='title'>CONTACT
                <div ></div>
                </div>
                <div className='footer-info'>
                    <div>
                        <img src={address} style={{width:"17px", margin:'7px 6px 0 0'}}alt="adress" />
                        ADRESSE: Rue Ayoub Hedfi, 8000 Tunis</div>
                    <div>
                        <br />
                    <img src={mob} style={{width:"17px", margin:'7px 6px 0 0'}}alt="adress" />
     
                    MOB: (+216) 98 749 116
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TEL : (+216) 72 231 670
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAX : (+216) 72 231 650
                    </div>
                    <div>
                    <br />

                    <img src={message} style={{width:"17px", margin:'7px 6px 0 0'}}alt="adress" />

                    E-mail: elghazella@ecole-elite.com
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;courriel: ayoub@ayoub.ayoub
                    </div>
        

                </div>

            </div>
            <div className='footer-map'>
                <div className='title'>LOCALISATION
                <div ></div>
                </div>
                <div className="map-container">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.0354087231085!2d10.16873001522536!3d36.88950117993029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb84a54e17b1%3A0x32337dbf005901f2!2s%C3%89cole%20ELITE%20JASMIN!5e0!3m2!1sfr!2stn!4v1654470687991!5m2!1sfr!2stn" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                 </div>
            </div>
        <div className='footer-message'>
                <div className='title'>VISITEZ NOUS
                <div ></div>
                </div>
                <div className='footer-info'>
                    <div>
                        Tous les jours de la semaine</div>
                    <br />
                    Du lundi a vendredi : du 8h à 17 h
                    <br />
                    <br />
                    Le weekend : du 9h à 11h
                    <br />
                    <br />
                    Les vacances : du 9h à 11h
      


            </div>
                </div>
        </div>
        <div className='footer-end'>
        <div >
       All copyrights © reserved  2022 - l'Elite des jasmin By Hedfi Ayoub
        </div>
        </div>

    </div>
  )
}

export default Footer