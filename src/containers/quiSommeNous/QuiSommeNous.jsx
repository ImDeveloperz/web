import React from 'react'
import images from '../../constants/images';
import { MoreInformation } from '../../components';
import './quiSommeNous.css'
const QuiSommeNous = () => {
  return (
    <div className="app-container-section-tree">
      <div className="app-section-tree-image">
        <img src={images.quisommenous} alt="app quisommenous"></img>
      </div>
      <div className="app-qui-somme-nous">
        <MoreInformation title='Qui sommes-nous ?
' body='Innovation & Informatique est un club à but non lucratif de la faculté des sciences Ain Chock. Le club est accrédité par l’Université Hassan II de Casablanca qui, par l’intermédiaire d’une commission, supervise les activités et programmes.' 
/>
        <MoreInformation title='Création 
' body='Janvier 2021
' />
        <MoreInformation title='Slogan ' body='Créativité, Innovation et Implémentation' />
      </div>
    </div>
  )
}

export default QuiSommeNous