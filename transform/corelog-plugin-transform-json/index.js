/**
 * Copyright © 2014 Andrey Gromozdov. All rights reserved.
 * Contacts: <andy.grom@yandex.ru>
 * License: http://opensource.org/licenses/MIT
 */
 
/* Interface */
module.exports = function () {
    return {
        type : "transform",
        name : 'json',
        run : run
    };
};

/* Implementation */
function run(message, callback) {
    var data = message.toString();
    try {
        data = JSON.parse(data);
    } catch(err) {
        return callback(err);
    }
    callback(null, data);
}
