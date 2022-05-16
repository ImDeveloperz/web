
import React from 'react'
import './header.css';
import images from '../../constants/images';
function Header() {
  return (
    <div className='app__header__wrapper section_header'> 
      <div className="app__wrapper_info">
        { /* <SubHeading/>*/} <h4>Le but du Innovation & Informatique</h4>
        <h1 className='app__header__h1'>Pourquoi le club a-t-il été créé ?</h1>
        <p>Le club a pour but d’offrir aux étudiants la possibilité de travailler ensemble au développement
          de leurs capacités en informatique tout en activant leur esprit innovant et créatif.
          Ses objectifs sont de :<br />
          -Une application de résumés faits par les étudiants, une plateforme d’échange d’informations entre les étudiants.<br />
          -Faciliter le contact entre les étudiants et le décanat<br />
          - Assurer la sécurité des étudiants de tout cyberharcèlement ou autre problème lié à l’informatique.
        </p>
        <div className="app__wraper_button">
          <button className='Button'>Rejoigner Nous</button>
          <button className='Button__more__information'>En savoir plus sur ...</button>
        </div>
      </div>
      <div className="app__wraper_img">
      <img src={images.header} alt="app header" />
      </div>
    </div>
  )
}

export default Header;