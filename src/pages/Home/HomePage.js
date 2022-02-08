import React from 'react';
import { Link } from 'react-router-dom';
import SearchCity from '../../components/SearchCity';
import WorldWide from '../../components/worldwide';
import './HomePage.scss'

const HomePage = () => {
  const cities = ["dallol","fairbanks","london","recife","vancouver","yakutsk"];
  return <div className='HomePage'>
    <div>
    <h1 className="title">Weather</h1>
    <h2 className="subtitle">select a city</h2>
    <WorldWide color="white" className="WorldWide"/>
    <div className="cities">
      {cities && cities.map((city,index)=>{
        return <div key={index} className="cities-item"><Link to={`/city/${city}`}>{city}</Link></div>
      })}
    </div>
     <SearchCity/> 
    </div>
  </div>;
};

export default HomePage;
