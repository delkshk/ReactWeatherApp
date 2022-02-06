import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";
const SearchCity = () => {
  const cityForm = (event) => {
    setCity(event.target.value);
  };
  const removeAccents = (text) => {       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

  const formHandle = (e) => {
    e.preventDefault();
    let cityFormatted = removeAccents(formCity.toLowerCase());
    cityFormatted = cityFormatted
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .replace(" ", "-")


    navigate(`/city/${cityFormatted}`);
  };
  const [formCity, setCity] = useState("");
  const navigate = useNavigate();
  return (
    <form className="city-search" onSubmit={formHandle}>
      <input
        type="text"
        placeholder="Search any city"
        value={formCity}
        onChange={cityForm}
      />
      <button type="submit">
        <ArrowIcon />
      </button>
    </form>
  );
};

export default SearchCity;
