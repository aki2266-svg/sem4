//write a node js script create a folder named abc create afile in it with name xyz.txt append data to xyz.txt and print msg data appended succesfully.read the data from xyz.txt and print in console.copy the content from xyz.txt to pqy.txt.delete the file xyz.txt and lastly print msg all operation perform succesfully do all this usin event module
const em=require('events')
const fs=require('fs')
const ee=new em
ee.on('createfolder',()=>{
    fs.mkdirSync('abc')
    console.log('file created sucessfully')
ee.emit('createFile')
})
ee.on('createFile',()=>{
    fs.writeFileSync('abc/xyz.txt','akshat')
    ee.emit('dataappend')
})
ee.on('dataappend',()=>{
    fs.appendFileSync('xyz.txt','joshi')
    console.log('data appended')
    ee.emit('readdata')
})
ee.on('readdata',()=>{
    var a=fs.readFileSync('xyz.txt')
    console.log(a)
})
ee.emit('createfolder')
