import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Country Found: {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.name}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;