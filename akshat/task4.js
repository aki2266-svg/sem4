// write a node js program to load simple html file as static on node js and print its content 
var http=require('http')
var fs=require('fs')
var u=require('url')
var addr='http://localhost:6081/1.html'
var a=u.parse(addr,true)
var b=a.path
console.log(b)
http.createServer(function(req,res){
   fs.readFile('b',(err,data)=>{if(err)console.log('not found')}
,res.writeHead(200,{'content-type':'text/html'})
,res.write())
})