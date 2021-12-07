const http = require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url==='/login' || req.url==='/'){
let data=fs.readFileSync('static/login.html');
res.write(data);
}
else if(req.url === '/movies'){
    let data=fs.readFileSync('static/movies.html');
    res.write(data);
}
else if(req.url === '/web'){
    let data=fs.readFileSync('static/web.html');
    res.write(data);
}
else if(req.url === '/home'){
    let data=fs.readFileSync('static/index.html');
    res.write(data);
}
else{
    let data=fs.readFileSync('static/contact.html');
    res.write(data);
}
res.end();
}).listen(8080,()=>{console.log('sever started')});
