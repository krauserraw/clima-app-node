const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key=148cadcd102f4b5bb4f29413027b8d46`);

    if (resp.data.total_results < 1) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry;

    return {
        direccion: location.formatted,
        lag: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}