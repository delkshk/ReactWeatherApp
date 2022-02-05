import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../../api/api";
import ArrowIcon from "../../components/ArrowIcon";
import "./Forecast.scss";

const Forecast = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [forecast, setForecast] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    Api.get("forecast.json?q=" + params.cityName)
      .then(function (response) {
        setForecast(response.data);
        setLoaded(true);
      })
      .catch(function (error) {
        setLoaded(true);
        setError(true);
      });
  }, []);
  const ForecastData = ({ ...props }) => {
    const data = props.data;
    const current = data.current;
    const day = data.forecast.forecastday[0].day;
    const astro = data.forecast.forecastday[0].astro;
    const hours = data.forecast.forecastday[0].hour;
    const timesNames = ["Dawn", "Morning", "Afternoon", "Night"];
    const times = [hours[3], hours[9], hours[15], hours[21]];
    return (
      <div
        condition={current.condition.code}
        className={"city code-" + current.condition.code + " "}
      >
        <Return />
        <h1 className="city-name">{data.location.name}</h1>
        <div className="city-condition">{current.condition.text}</div>
        <div className="city-currentDay">
          <div className="city-currentDay--temp">{current.temp_c}</div>
          <div className="city-currentDay--celcius">°C</div>
          <div className="city-currentDay--Maxtemp">
            <ArrowIcon /> {Math.round(day.maxtemp_c)} °C
          </div>
          <div className="city-currentDay--Mintemp">
            <ArrowIcon /> {Math.round(day.mintemp_c)} °C
          </div>
        </div>
        <img
          className="city-Icon"
          alt={current.condition.text}
          src={current.condition.icon}
        />
        <div className="city-timesCondition">
          {times.map((hour, i) => {
            return (
              <div className="city-timesCondition--item" key={i}>
                <div className="city-timesCondition--item_name">
                  {timesNames[i]}
                </div>
                <img
                  className="city-timesCondition--item_icon"
                  src={hour.condition.icon}
                  alt={timesNames[i]}
                />
                <div className="city-timesCondition--item_value">
                  {Math.round(hour.temp_c)}°C
                </div>
              </div>
            );
          })}
        </div>
        <div className="city-others">
          <div className="city-others--item">
            <div className="city-others--item_name">Wind speed</div>
            <div className="city-others--item_value">
              {Math.round(0.277778 * current.wind_kph)} m/s
            </div>
          </div>
          <div className="city-others--item">
            <div className="city-others--item_name">Sunrise</div>
            <div className="city-others--item_value">{astro.sunrise}</div>
          </div>
          <div className="city-others--item">
            <div className="city-others--item_name">Sunset</div>
            <div className="city-others--item_name">{astro.sunset}</div>
          </div>
          <div className="city-others--item">
            <div className="city-others--item_name">Humidity</div>
            <div className="city-others--item_name">{current.humidity}%</div>
          </div>
        </div>
      </div>
    );
  };

  const LoadingComponent = () => {
    return (
      <div className="LoadingComponent">
        <Return />
        Loading plase wait...
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="responseIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div>
    );
  };
  const ErrorComponent = () => {
    return (
      <div className="ErrorComponent">
        <Return />
        Opps... Something is wrong{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="responseIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    );
  };

  const Return = () => {
    return (
      <button onClick={() => navigate("/")}>
        <ArrowIcon></ArrowIcon>
      </button>
    );
  };
  return (
    <div className="ForecastPage">
      {!loaded && <LoadingComponent />}
      {error && <ErrorComponent />}
      {forecast && <ForecastData data={forecast}></ForecastData>}
    </div>
  );
};

export default Forecast;
