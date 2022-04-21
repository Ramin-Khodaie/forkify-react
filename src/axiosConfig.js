import axios from "axios";


export const BASE_URL = "https://forkify-api.herokuapp.com/api/"
export const GET_URL = "https://forkify-api.herokuapp.com/api/get?rId=";
export const SEARCH_URL = "https://forkify-api.herokuapp.com/api/search?q=";
export const TIMEOUT = 10;
export const RES_PAGE = 10


export const bxios = axios.create({
    baseURL:BASE_URL,
    timeout: 5000,    
})
