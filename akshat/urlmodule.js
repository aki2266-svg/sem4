var u=require('url')
var fs=require('fs')
var adr='https://localhost:8080/test?m1=50&m2=60&m3=80'
var q=u.parse(adr,true)
process.noDeprication=true
console.log(q)
var a=parseInt(q.query.m1)
var b=parseInt(q.query.m2)
var c=parseInt(q.query.m3)
console.log((a+b+c)/3)