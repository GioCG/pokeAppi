import React from 'react'

export const ContainerPoke = ({pokemons,PokeName}) => {
    
  return (
    <>
      <h1 className="text-center my-4 text-primary">{PokeName}</h1>
      <div className="container">
        <div className="row justify-content-center">
          {pokemons.map(({ id, sprites, types }) => {
            return (
              <div key={id} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={sprites}
                    alt="image"
                    style={{ borderRadius: '10px' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-secondary">{types}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
