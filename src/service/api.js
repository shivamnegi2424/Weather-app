import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY= '12dc1bd8fc99bdb4ac97b9a17bcbe443'

export const getData = async(city,country) => {
    return await  axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}