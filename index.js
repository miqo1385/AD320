import http from "http";
import fs from "fs";

http.createServer((req, res) =>{
    console.log(req);
    const path = req.url;
    console.log(path);

    switch (path){
        case '/':
            fs.readFileSync('home.html', (err, data) =>{
                if (err){
                    return console.error(err);
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString())
            })
            break;

        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About Page');
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Page Not Found');
            break;
    }

}).listen(process.env.PORT || 3000);


