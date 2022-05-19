import React from 'react'
import './navbar.css'
/*import {FiFacebook, FiInstagrame,FiWhatsapp} from 'react-icons/fi'*/
import images from '../../constants/images';
import NavbarList from '../navbarListe';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app_navbar_left">
      <div className="app_navbar_logo">
        <img src={images.logo} alt="app logo" />
        <h3>Innovation & Informatique</h3>
      </div>
      <ul className="app__navbar__links">
        <div className="app__navbar__links__list">
          <NavbarList />
        </div>        
        <div className="app__navbar__links__contact">
          Contacter Nous
          <li className="p__opensans" > <a href='#Insta'><InstagramIcon  /></a> </li>
          <li className="p__opensans"> <a href='#whats'><WhatsAppIcon/></a></li>
          <li className="p__opensans"> <a href='#facbook'><FacebookIcon/></a></li>
        </div>
      </ul>
      </div>
      <div className="app__navbar__login">
        <a href="#login" className='p__opemsans'>Se Connecter</a>
        <button className='Button'>Rejoigner Nous</button>
         
      </div>
    </nav>
  )
}
export default Navbar;