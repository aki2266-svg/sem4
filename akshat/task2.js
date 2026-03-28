var http=require('http')
var fs=require('fs')
{http.createServer(function(req,res){
    if(req.url==='/'){
     res.writeHead(200,{'content-Type':'application/json'}
    )

    res.write('<h1>Hello World</h1><img src="Screenshot(17).png"/>')}
    elseif(req.url==='/')
    {
        const img=fs.readFileSync('akshat/Screenshot(17).png')
        res.end(img)
    }}).listen(3120)}


