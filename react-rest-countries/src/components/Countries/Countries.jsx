import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            {
                countries.map(country => <Country key={country.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;