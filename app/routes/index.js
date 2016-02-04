'use strict';

var parseHeader = require(process.cwd() + "/app/controllers/parseHeader.js");

module.exports = function(app) {
    
    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html")
        });
        
    app.route('/api/whoami')
        .get(function(req, res) {
            res.json(parseHeader(req));
        });
    
};