The corelog UDP input plugin
============================
This plugin allow receive messages from UDP socket.

Options:
--------
 - port - UDP port for listening.
 - type - (Optionaly) "udp4" or "udp6" values accepted. Default value is "udp4".
 - transform - transform plugin names or aliases.
 - output - output plugin names or aliases.

Example:
--------
```javascript
{
    "options": {
        "port" : "5555"
    },
    "transform" : ["json"],
    "output" : ["console"]
}
```
    
License
-------
The MIT License

Copyright © 2014 Gromozdov Andrey Alexandrovich.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.