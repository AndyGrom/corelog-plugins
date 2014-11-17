/**
 * Copyright © 2014 Andrey Gromozdov. All rights reserved.
 * Contacts: <andy.grom@yandex.ru>
 * License: http://opensource.org/licenses/MIT
 */

var elasticsearch = require('elasticsearch');

module.exports = function() {
    return {
        type : 'output',
        name : 'elasticsearch',        
        run : run,
        default: {
            host : 'localhost:9200',
            driverOptions : {
                index : 'corelog',
                type: 'corelog-output'
            }
        }
    }
};

var client;
function run(message, callback) {
    var self = this;
    if (!client) {
        client = new elasticsearch.Client({
            host: self.options.host
        });
    }
    var options = self.options.driverOptions;
    options.body = message;
    client.index(options, callback);
}

