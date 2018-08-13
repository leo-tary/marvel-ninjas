
function setCustomHeaders(req , res , next){

    res.setHeader('x-powered-by', 'MarvelUniverse');
    next();

}


module.exports = {
    setCustomHeaders
}