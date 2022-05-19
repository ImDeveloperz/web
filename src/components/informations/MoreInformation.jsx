import React from 'react'
import './moreInformation.css';
const MoreInformation = ({ title, body }) => {
    return (
        <div className='app-container'>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">
                <p>{body}</p>
            </div>
        </div>
    )
}

export default MoreInformation;