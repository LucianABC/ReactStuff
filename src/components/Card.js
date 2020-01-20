import React from 'react';
import './Card.css'
const Card = props => {
    return(
        <section className="card" style = {{
                backgroundImage: `url(${props.cardBckgrnd})` 
        }}>
            <article className="card-info">
                <h2 className="card-info-subtitle">Villains</h2>
                <h1 className="card-info-title">{props.villainName}</h1>
                <p className ="card-info-text">{props.villainInfo}</p>
 
                <i className="fa fa-plus"></i>

            </article>
        </section>

    );
}
export default Card;