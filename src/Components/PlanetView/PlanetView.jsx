import React from "react";
import "../RandomPlanet/RandomPlanet.styled.css"

const PlanetView = (props) => {
  const {
    planet: {
      name,
      population,
      rotationPeriod,
      diameter,
      id
    }
  } = props;

  return (
    <>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PlanetView;