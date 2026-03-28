const em=require('events')
const ee=new em

ee.on('start',(a,b)=>{console.log('start from '+a+' to '+b)})
ee.emit('start',1,100)