// w.a.p register multiple event listener fot different evvents myevent1,myevent2,remove a specific event listener for myevent2,remove all listener associate with myevent1
const em=require('events')
const ee=new em()
var fun1=(msg)=>{
    console.log('msg from fun1'+msg)
}
var fun2=(msg)=>{
    console.log('msg from fun2'+msg)
}
ee.on('myevent2',fun2)
ee.on('myevent1',fun1)
ee.on('myevent2',fun2)
ee.on('myevent1',fun1)
ee.removeListener('myevent2',fun2)
ee.removeAllListeners('myevent1')
ee.emit('myevent2','lj university')
ee.emit('myevent1','lju')