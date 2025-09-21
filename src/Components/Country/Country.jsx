import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {

    const [visited, setvisited] = useState(false)

    const handleVisit = () => {
        setvisited(visited ? false : true)
    }


    return (
        <div className={`card ${visited?'card-visited':''}`}>
            <div className='top'>
                <div className='topleft'>
                    <h2 className='country-title' id='country-title'>{country.name.common}</h2>
                    <div>
                        <h2>Capital</h2>
                        <p>{country.capital.capital[0]}</p>
                    </div>
                </div>
                <div className='topright'>
                    <div>
                        <h2>Region</h2>
                        <p>{country.region.region}</p>
                    </div>
                    <div>
                        <h2>Continents</h2>
                        <p>{country.continents.continents[0]}</p>
                    </div>
                </div>
            </div>
            <img src={country.flags.flags.png} alt="" />
            <div className='bottom'>
                <div>
                    <h2>Area:</h2>
                    <p>{country.area.area}</p>
                </div>
                <div>
                    <h2>Population:</h2>
                    <p>{country.population.population}</p>
                </div>
            </div>
            <div className='btn-container'>
                <button onClick={handleVisit}>
                    {visited ? 'Visited' : 'Not Visited'}
                </button>
                <button>Favorite</button>
            </div>
        </div>
    );
};

export default Country;