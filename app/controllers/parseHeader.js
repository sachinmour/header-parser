'use strict';

var useragent = require('useragent');

var parseHeader = function(req) {
    
    var object = {ip_address: null, language: null, operating_system: null};
    var agent = useragent.parse(req.headers['user-agent']);
    var os = agent.os.toString();
    var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    var language = req.headers['accept-language'];
    
    object.ip_address = ip;
    object.operating_system = os;
    object.language = language;
    
    return object;
};

module.exports = parseHeader;