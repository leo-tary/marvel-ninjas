const { getCharacterInfo } = require('../external/marvel');
const express = require('express');
const router = express.Router();

router.get('/:id' , (req , res) => {

    // console.log(`hello...${req.params.id}`);

    // getCharacterInfo(req.params.id , (error , characterInfo) =>{

    //     if(error) res.status(400).send(`Error scanning marvel universe..${error}`);

    //     res.send(characterInfo);

    // })

    getCharacterInfo(req.params.id)
                        .then((characterInfo) => {

                            res.send(characterInfo);

                        })
                        .catch((error) => {

                            res.status(400).send(`Error scanning marvel universe..${error}`);

                        })



})


module.exports = router;