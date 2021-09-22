import React from 'react';
import './Country.css';

const Country = (props) => {

    const { name, capital, flag, population, region } = props.country; // destructuring from an object

    return (
        <div className='country'>
            <img src={flag} alt="" />
            <h4>Name: {name}</h4>
            <small>Region: {region}</small>
            <p>Capital: {capital}, Population: {population}</p>
        </div>
    );
};

export default Country;