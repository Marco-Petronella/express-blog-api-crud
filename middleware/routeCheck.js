function routeCheck(req, res, next) {
    //  gestione delle rotte non registrate
    console.log(`Request received: ${req.method} ${req.path}`);
    console.log('Request body:', req.body);
    
    next();
}

   
module.exports = routeCheck;