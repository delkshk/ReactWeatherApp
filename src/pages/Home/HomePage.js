import React from 'react';
import { Link } from 'react-router-dom';
import WorldWide from '../../components/worldwide';
import './HomePage.scss'

const HomePage = () => {

  const cities = ["dallol","fairbanks","londres","recife","vancouver","yakutsk"]

  return <div className='HomePage'>
    <h1 className="title">Weather</h1>
    <h2 className="subtitle">select a city</h2>
    <WorldWide color="white" className="WorldWide"/>
    <div className="cities">
      {cities && cities.map((city,index)=>{
        return <div key={index} className="cities-item"><Link to={`/city/${city}`}>{city}</Link></div>
      })}
    </div>
  </div>;
};

export default HomePage;
