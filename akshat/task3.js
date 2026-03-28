var http=require('http')
var fs=require('fs')
var u=require('url')
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>home page</h1>')
    res.write('<ul><li><a href="/home">home</a></li><li><a href="/about">about</a></li></ul>')
    if(req.url==='/home'){
      res.writeHead(200,{'content-type':'text/html'})
      res.write('<h1>home page</h1>')
    }
    elseif(req.url==='/about')
    {
      res.writeHead(200,{'content-type':'text/html'})
      res.write('<h1>about</h1>')
    }
    res.end()
}).listen(3120)