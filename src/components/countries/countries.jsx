import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({countriesPromise}) => {
    const CountriesData = use(countriesPromise);
    const countries = CountriesData.countries;
    console.log(countries);
    return (
        <div>
            <h1>In the Country: {countries.length}</h1>
            {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                    country = {country}></Country>)
            }
        </div>
    );
};

export default Countries;