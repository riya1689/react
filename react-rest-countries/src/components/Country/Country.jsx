import React from 'react';
import Countries from '../Countries/Countries';

const Country = ({country}) => {
    console.log(country.flags);
    return (
        <div>
            <h3>Name: {country.name.common} </h3>
              <img src ={country.flags.png} alt=" " />
              <p>Independent: {country.independent? 'Free' : 'Not Free'}</p>
              <p>Population: {country.population}</p>
        </div>
    );
};

export default Country;