const axios = require('axios');
const URL = 'http://api.openweathermap.org/data/2.5/weather';
const citys = require('./city.list.json/city.list.json');
//https://home.openweathermap.org/api_keys
const APIkey = "c3348352bcf88599fde90a97f0c98170";
/*
const IDCity = [{
    "Rio_de_Janeiro":3451189, 
    "Sao_Paulo": 3448439,
    "Sao_Carlos": 3449319,
    "Jerusalem": 293198
}];
*/

let IDCity = citys.find( cities => cities.name === 'Sao Paulo' );
//console.log(citys.find( cities => cities.name === 'Sao Paulo' ));

//porque async para manipular as promises
async function obterPrevisao(nome){
    const url = `${URL}/?id=${IDCity.id}&appid=${APIkey}`;
    const response = await axios.get(url);
    return response.data;
}

//converter de Kelvin para Celcius, basta diminuir a constante − 273,15 K
function KelvinToCelsius(valueKelvin){
    const Kelvin = 273.15;
    let resultado = (valueKelvin - Kelvin); 
    resultado = resultado.toFixed(2);
    return resultado;
}

obterPrevisao('Rio_de_Janeiro').then(function(resultado){
                        console.log( resultado.name);
                        console.log('resultado', resultado.main);
                        console.log('Temperatura: ', KelvinToCelsius(resultado.main.temp));
                    }).catch(function(error){
                        console.error('DEU RUIM', error);                     
                    });