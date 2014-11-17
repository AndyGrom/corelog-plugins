/**
 * Copyright © 2014 Andrey Gromozdov. All rights reserved.
 * Contacts: <andy.grom@yandex.ru>
 * License: http://opensource.org/licenses/MIT
 */
 
/* Interface */
module.exports = function () {
    return {
        type : "input",
        name : 'udp',
        run : run,
        stop : stop,
        test : test
    };
};

/* Implementation */
var net = require('dgram');

function run(callback) {
    var self = this;

    self.server = net.createSocket(this.options.type || 'udp4', function(message){
        callback(null, message);
    });

    self.server.on('error', function(err){
        return callback(err);
    });

    self.server.bind(self.options.port, function(err){
        if (err) {
            return callback(err);
        }
        console.log('udp server bound on port: ' + self.options.port);
    });
}

function stop(callback) {
    this.server.on('close', callback);
    this.server.close();
}

function test(message) {

    var client = net.createSocket(this.options.type || 'udp4');
    client.send(message, 0, message.length, this.options.port, "localhost", function() {
        client.close();
    });
}
