import axios from 'axios';

const BASE_URL = "http://192.168.245.216:1337/api"

// const API_KEY =
const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    // timeout: 1000,
    headers:{
        Authorization:"Bearer "+process.env.EXPO_PUBLIC_TOKEN
    }
  });


  export const getSlider = () => AxiosInstance.get("/sliders?populate=*")
  export const getCategories = () => AxiosInstance.get("/categories?populate=*")

  