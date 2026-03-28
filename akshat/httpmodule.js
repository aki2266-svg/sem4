var http=require('http')
http.createServer(function(req,res){
     res.writeHead(200,{'content-Type':'application/json'}
    )
    res.write('akshat')
    res.write('<h1>Hello World</h1>')
    const data={'subject':'fsd2','topic':'nodejs'}
    res.end(data)
}).listen(3120)