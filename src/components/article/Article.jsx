import React from 'react'
function Article({ imageUrl, artTitle, imageAlt, artBody }) {
console.log('fkfk')
  return (
    <div>
      <div className="card-container">
        <div className="card-image">
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{artTitle}</h3>
          </div>
          <div className="card-body">
            <p>{artBody}</p>
          </div>
          <div className="btn">

          </div>
        </div>

      </div>
      </div>
      )
    
}

      export default Article;