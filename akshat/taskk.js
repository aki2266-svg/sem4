//write a node js script create a folder named abc create afile in it with name xyz.txt append data to xyz.txt and print msg data appended succesfully.read the data from xyz.txt and print in console.copy the content from xyz.txt to pqy.txt.delete the file xyz.txt and lastly print msg all operation perform succesfully do all this usin event module
const em=require('events')
const fs=require('fs')
const ee=new em
fs.mkdir('abc')
