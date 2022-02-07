import React from "react";

export const WeatherIcon = ({ ...props }) => {
  var src = props.src;
  src = src.replace("//cdn.weatherapi.com/weather/64x64","").replace(".png",".svg");

  return (
    <img
      className={"Weather_icon " + props.className}
      src={"/images" + src}
      alt={props.alt}
      data-src={"images" + src}
    />
  );
};
