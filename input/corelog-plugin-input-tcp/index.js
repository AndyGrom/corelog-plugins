/**
 * Copyright © 2014 Andrey Gromozdov. All rights reserved.
 * Contacts: <andy.grom@yandex.ru>
 * License: http://opensource.org/licenses/MIT
 */
 
/* Interface */
module.exports = function () {
    return {
        type : "input",
        name : 'tcp',
        run : run,
        stop : stop,
        test : test
    };
};

/* Implementation */
var net = require('net');

function run(callback) {
    var self = this;
    
    self.server = net.createServer(function(connection){
        var data = new Buffer(0);
        connection.on('data', function(raw) {
            data = Buffer.concat([data, raw], data.length + raw.length);
        });

        connection.on('close', function() {
            callback(null, data);
        });
    });

    self.server.listen(this.options.port, function(err){
        if (err) {
            return callback(err);
        }
        console.log('tcp server bound on port: ' + self.options.port);
    });
}

function stop(callback) {
    this.server.close(callback);
}

function test(message) {
    var client = net.connect({port: this.options.port, host: this.options.host || 'localhost'},
        function() {
            client.write(message, function(err) {
                client.end();
            });
        });
}
