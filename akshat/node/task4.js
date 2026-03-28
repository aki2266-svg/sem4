// create a json object shape which contain array of object calculate the perimeter of square and circle by using side value and diameter respectively and ans should be written in file
var shape=[{'shape':'square','side':4},{'shape':'circle','diameter':4}]
var pers=shape[0].side*4
var rad=shape[1].side/2
var perc = 2*3.14*rad
const fs=require('fs')
fs.writeFileSync('shape.txt',JSON.stringify(shape))
fs.appendFileSync('shape.txt','perimeter of circle ='+perc+'perimeter of square ='+pers)
