import React from 'react'
import images from '../../constants/images';
import './quiSommeNous.css'
const QuiSommeNous = () => {
  return (
      <div className="app-container-section-tree">
        <div className="app-section-tree-image">
          <img src={images.quisommenous}></img>
        </div>
        <div className="app-qui-somme-nous">
          <div className="app-qui-title">
            <h1>Qui Somme Nous ?</h1>
            <p>Innovation & Informatique est un club à but non lucratif
               de la faculté des sciences Ain Chock. Le club est accrédité par
                l’Université Hassan II de Casablanca qui, par l’intermédiaire 
                 commission, supervise les activités et programmes.
            </p>
          </div>
        </div>
      </div>
    
  )
}

export default QuiSommeNous