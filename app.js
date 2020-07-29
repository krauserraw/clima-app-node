const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Address from the city for get the wheather',
        demand: true
    }
}).argv;

let getInfo = async(address) => {

    let coors = await lugar.getLugarLatLng(address);
    let temp = await clima.getClima(coors.lag, coors.lng);

    return `El clima en ${coors.direccion} es de ${temp} °C.`;
}

getInfo(argv.address)
    .then(msj => console.log(msj))
    .catch(e => console.log(e.message));