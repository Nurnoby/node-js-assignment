var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is Home Page</h1>')
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is About Page</h1>')
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    }

    if(req.url=="/file-write"){        
        fs.writeFile('demo.txt','hello world', function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('<h1>File Write Failed</h1>')
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('<h1>File Write Successful</h1>')
                res.end();
            }
        })

    }

});
server.listen(3000);
console.log("Server is running in port 3000")