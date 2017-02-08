var http = require('http');

http.createServer(onRequest).listen(7777);

function onRequest(client_req, client_res) {
    console.log('serve: ' + client_req.url);

    var options = {
        hostname: 'localhost',
        port: 3505,
        path: client_req.url,
        method: client_req.method
    };

    var proxy = http.request(options, function (res) {
        res.pipe(client_res, {
            end: true
        });
    });

    client_res.setHeader('Content-Type', 'application/json');
    client_res.setHeader('Access-Control-Allow-Origin', '*');
    client_res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    client_res.setHeader('Access-Control-Allow-Headers', 'Brand, Authorization, content-type');

    client_req.pipe(proxy, {
        end: true
    });
}