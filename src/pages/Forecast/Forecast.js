import React from "react";
import { useParams } from "react-router-dom";

const Forecast = () => {
  let params = useParams();
  return <div>{params.cityName}</div>;
};

export default Forecast;
