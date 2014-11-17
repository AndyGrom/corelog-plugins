/**
 * Copyright © 2014 Andrey Gromozdov. All rights reserved.
 * Contacts: <andy.grom@yandex.ru>
 * License: http://opensource.org/licenses/MIT
 */
 
 
/* Interface */
module.exports = function () {
    return {
        type : "output",
        name : 'console',
        run : run
    };
};

/* Implementation */

function run(message, done) {
    console.log(message);
    done();
}
