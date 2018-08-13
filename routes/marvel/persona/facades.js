const { getCharacterInfo , getCharacterComics } = require('../../../external/marvel')
const express = require('express');
const router = express.Router();

router.get('/:id' , (req , res) => {

    // console.log(`hello...${req.params.id}`);

    // getCharacterInfo(req.params.id , (error , characterInfo) =>{

    //     if(error) res.status(400).send(`Error scanning marvel universe..${error}`);

    //     res.send(characterInfo);

    // })


    // Using Promise Only

    getCharacterInfo(req.params.id)
                        .then((characterInfo) => {

                            res.send(characterInfo);

                        })
                        .catch((error) => {

                            res.status(400).send(`Error scanning marvel universe..${error}`);

                        })



})


router.get('/comics/:id' , async(req , res) => {

    // Using async-await

    try{
        const comicInfo = await getCharacterComics(req.params.id);
        if(comicInfo.length == 0) return res.status(404).send(`Unable to scan Character's Comic Info...`);
        res.send(comicInfo);
    }catch(error){
        res.status(400).send(`Error scanning character's comics list..${error}`);

    }


})


module.exports = router;