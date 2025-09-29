import React, { useState } from 'react';
import Countries from '../Countries/Countries';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false); 
    //console.log(handleVisitedCountries);
    const handleVisited=()=>{
        // console.log('visited click');
        //toggle type 1
        // if(visited === true){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true);
        // }
        //toggle type 2
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        // class nae dynamic
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common} </h3>
              <img src ={country.flags.png} alt=" " />
              <p>Independent: {country.independent? 'Free' : 'Not Free'}</p>
              <p>Population: {country.population}</p>
              <button className ={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>{
                visited ? 'Visited' : 'Not Visited'
                }</button>
        </div>
    );
};

export default Country;