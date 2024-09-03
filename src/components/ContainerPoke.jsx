import React from 'react';

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

export const ContainerPoke = ({pokemon}) => {
  return (
    
    <div className="container mt-5">
      <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm">
              <img
                className="card-img-top"
                src={pokemon.sprite}
                alt={pokemon.name}
                style={{ borderRadius: '10px' }}
              />
              <div className="card-body text-center">
              <h5 className="card-title text-secondary">{pokemon.name} (#{pokemon.id})</h5>
                {pokemon.types.map(type => (
                      <span
                        key={type}
                        style={{
                          backgroundColor: typeColors[type],
                          color: 'white',
                          padding: '5px 10px',
                          borderRadius: '5px',
                          margin: '0 5px',
                          display: 'inline-block'
                        }}
                      >
                        {type}
                      </span>
                    ))}
                <p> </p>
                <p className="card-text">Height: {pokemon.height}</p>
                <p className="card-text">Weight: {pokemon.weight}</p>
              <div className="my-3">
               <h6 className="text-info">Abilities:</h6>
                  <ul className="list-group  text-start">
                    {pokemon.abilities.map((ability, index) => (
                    <li key={index} className="list-group-item">
                      {ability}
                    </li>
                    ))}
                  </ul>
                </div>
                <div className="my-3">
                  <h6 className="text-info">Stats:</h6>
                  <ul className="list-group">
                    {pokemon.stats.map(stat => (
                      <li key={stat.name} className="list-group-item d-flex justify-content-between align-items-end">
                        {stat.name.toUpperCase()}
                        <span className="badge bg-primary rounded-pill">{stat.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};