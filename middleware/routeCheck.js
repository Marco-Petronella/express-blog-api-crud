function routeCheck(req, res, next) {
    //  gestione delle rotte non registrate
    console.log(`Request received: ${req.method} ${req.path}`);
    console.log('Request body:', req.body);
    if (!req.path.startsWith('/posts')) {
        const err = new Error('Route not found');
        err.status = 404;
        return next(err);
    }
    next();
}

module.exports = routeCheck;