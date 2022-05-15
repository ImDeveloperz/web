import React from 'react'
import './brand.css'
import images from '../../constants/images';
import Card from '../card/Card'
const Brand = () => {
  return (
    <div className='app-brand'>
      <div className="app-brand-title">
        <h1>Nos Activite</h1>
      </div>
      <div className="app-brand-cards">
        <div className="app-brand-card">
          <Card cardTitle='Programation'
            imageUrl={images.card}
            cardBody='Une équipe qui se spécialise en langages de programmation, constituée de personnes très attentives, ils adorent les détails et l’efficacité, leur but est de présenter notre équipe dans les compétitions externes.
           '
          />
        </div>
        <div className="app-brand-card">
          <Card cardTitle='Robotique'
            imageUrl={images.card}
            cardBody='Comme vous le savez, notre club est nommé Innovation et Informatique, cette équipe est le miroir de notre club, toujours innovante et créative, prête à nous représenter dans les compétitions nationales.           '
          />
        </div>
        <div className="app-brand-card">
          <Card cardTitle='Devolopement Web'
            imageUrl={images.card}
            cardBody='Nos génies des sites web, ceux qui adorent le développement et le design, toujours prêts à nous éblouir avec leurs idées pour que le monde nous admire juste en observant nos sites.
           '
          />
        </div>
      </div>
    </div>
  )
}

export default Brand;