// write a node js program using event module
// 1.when connection Event occur print connection sucessful and trigger data recieved Event when the data rrecieved event occur print data recieved succesfully finally print thanks at end of execution
const em=require('events')
const ee=new em()
ee.on('connection',()=>{console.log('connection succesfull')},ee.on('data_recieved',()=>{console.log('data recieved succesfully')}))
ee.emit('connection')
ee.emit('data_recieved')
console.log('thanks')

