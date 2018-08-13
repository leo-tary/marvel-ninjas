const md5 = require('md5');
const config = require('config');
const axios = require('axios');

const marvel_access_keys = {
    public_key: config.get('MARVEL_PUBLIC_KEY'),
    private_key: config.get('MARVEL_PRIVATE_KEY'),
    gateway: config.get('MARVEL_GATEWAY')
}


const timeStamp = Math.floor(new Date() / 1000);

const hashString = `${timeStamp}${marvel_access_keys.private_key}${marvel_access_keys.public_key}`;
const cryptoHash = md5(hashString);


function getCharacterInfo(characterId){

    const marvelUrl = `${marvel_access_keys.gateway}${characterId}?ts=${timeStamp}&apikey=${marvel_access_keys.public_key}&hash=${cryptoHash}`;

    return new Promise((resolve , reject) => {

        axios.get(marvelUrl)
                .then((response) => {
    
                    // characterInfo(undefined , response.data.data.results);
                    resolve(response.data.data.results);
    
                })
                .catch((err) => {
    
                    // characterInfo(err.message);
                    reject(err.message);
    
                })

    });

}


function getCharacterComics(characterId){

    const marvelUrl = `${marvel_access_keys.gateway}${characterId}/comics?ts=${timeStamp}&apikey=${marvel_access_keys.public_key}&hash=${cryptoHash}`;

    return new Promise((resolve , reject) => {
        axios.get(marvelUrl)
            .then((response) => {

                resolve(response.data.data.results);

            })
            .catch((err) => {

                reject(err.message);

            })
    });
}


module.exports = {
    getCharacterInfo,
    getCharacterComics
}