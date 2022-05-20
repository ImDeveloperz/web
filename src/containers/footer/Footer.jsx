import React from 'react'
import './footer.css'
/*import {FooterOverlay } from '../../components'
import {FiFacebook, FiInstagrame,FiWhatsapp} from 'react-icons/fi'*/
import images from '../../constants/images';
function Footer() {
  return (
    <div className='App__footer'>
      <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h3 className="app__footer-headText">Contacter Nous</h3>
                <p className="p__opensans">Km 8 Route d'El Jadida, B.P 5366 Maarif Casablanca 20100 Maroc</p>
                <p className="p__opensans">+212 677-----</p>
                <p className="p__opensans">+212 566-----</p>
                <p>  Gmail : Innovinfofsac@gmail.com</p>
           </div>
            <div className="app__footer-links_logo">
                  <img src={images.logo2} alt="app-logo"></img>
                  <p className="p__mottivation">~~Un pour tout et tous pour un~~</p>
            </div>
            <div className="app_footer-links_work">
              <h3>Suivi Le Club</h3>
                   <p>Instagram : innovinfofsac</p>
                   <p>Facebook : Innovation&Informatique Fsac</p>
            </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans">
                © 2022 Innovation & Informatique.All Right Are Reserved
                </p>
            </div>
       
    </div>
  )
}

export default Footer