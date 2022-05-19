import React from 'react'
import './card.css'
const Card = ({ cardTitle, imageUrl, cardBody }) => {
    return (
       <div className="card-container">
             <div className="card-image">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{cardTitle}</h3>
                </div>
                <div className="card-body">
                    <p>{cardBody}</p>
                </div>
                <div className="btn">
                    <button> <a href="ff">Voir Plus</a> </button>
                </div>
            </div>
        </div>
    )
}

export default Card;