var app = require('./app');
var port = process.env.PORT || 3000;
var server = app.listen(port, ()=>{
    console.log("Express Server listening on port"+port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});
