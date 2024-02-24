import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card__image" />
      <div className="card--content">
        <div className="card-content-top">
          <i className="fas fa-map-marker-alt red-icon"></i>
          <p>{props.location.toUpperCase()}</p>
          <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </div>
        <h1>{props.title}</h1>
        <h2>{props.startDate} - {props.endDate}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
