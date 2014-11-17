/**
 * Copyright © 2014 Andrey Gromozdov. All rights reserved.
 * Contacts: <andy.grom@yandex.ru>
 * License: http://opensource.org/licenses/MIT
 */
 
/* Interface */
module.exports = function () {
    return {
        type : "transform",
        name : 'time',
        run : run
    };
};

/* Implementation */
function run(message, callback) {
    message.timestamp = new Date();
    setImmediate(function(){
        callback(null, message);
    });    
}
