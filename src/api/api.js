import axios from "axios";

export const Api = axios.create({
    baseURL: "https://api.weatherapi.com/v1/",
    headers: { 
        'key': '370dec649d9f4592a03153659220502'
    }
})