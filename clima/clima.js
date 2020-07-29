const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9733ae6c273ea202a5e05ab60ecba9ba`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}