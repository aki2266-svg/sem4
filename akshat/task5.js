var u=require('url')
var fs=require('fs')
var http=require('http')
var a='http://localhost:3120/exam.txt'
var b=u.parse(a,true)
var c=(b.pathname)
fs.writeFileSync('c')
fs.appendFileSync('c','')
