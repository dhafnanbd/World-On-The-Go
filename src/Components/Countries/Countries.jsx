import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        if (visitedCountries.includes(country)) {
            let newVisitedCountries = visitedCountries.filter(visitedCountry => visitedCountry !== country)
            setVisitedCountries(newVisitedCountries);
        }
        else {
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries)
        }
    }

    const [favCountry, setFavCountry] = useState([])

    const handleFav = (country) => {
        if (favCountry.includes(country)) {
            const newFavCountry = favCountry.filter(fav => fav !== country)
            setFavCountry(newFavCountry)
        }
        else {
            const newFavCountry = [...favCountry, country]
            setFavCountry(newFavCountry)
        }
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <>
            <div>
                <h2>Total Visited Countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(vc => <li>{vc.name.common}</li>)
                    }
                </ul>
            </div>
            <br></br>
            <div>
                <h2>Total Favorite Countries: {favCountry.length}</h2>
                <ul>
                    {
                        favCountry.map(vc => <li>{vc.name.common}</li>)
                    }
                </ul>
            </div>
            <br></br>

            <div className='countriesContainer'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleFav={handleFav}
                        >
                        </Country>)
                }
            </div>
        </>
    );
};

export default Countries;