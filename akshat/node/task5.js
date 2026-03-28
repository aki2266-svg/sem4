// perform below task object to file(write) and read the data from file and do 1.add a and b  2. sub 2 element of c and b must be positive 3.mult of element c 4.add the output of addition,subtraction and mult in s2.txt
const data={d:{a:10,b:20,c:[30,10]}}
const fs=require('fs')
var sum=data.d.a+data.d.a
var sub=Math.abs(data.d.c[1]-data.d.b)
var mult=data.d.c[0]*data.d.c[1]
fs.writeFileSync('s1.txt','\n'+JSON.stringify(data))
fs.appendFileSync('s1.txt','\n'+JSON.stringify(sum))
fs.appendFileSync('s1.txt','\n'+JSON.stringify(sub))
fs.appendFileSync('s1.txt','\n'+JSON.stringify(mult))