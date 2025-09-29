import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    const countries = use(countriesPromise);

    const handleVisitedFlag =(flag) =>{
        // console.log('flag is added', flag);
        const newVisitedFlags =[...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }
    const handleVisitedCountries =(country) =>{
        console.log('country visited clicked to be added',country);
        const newVisitedCountries =[...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    console.log(visitedCountries);
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled so far: {visitedCountries.length} </h3>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                countries.map(country => <Country 
                    key={country.ccn3} 
                    handleVisitedCountries ={handleVisitedCountries}
                    handleVisitedFlag ={handleVisitedFlag}
                    country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;