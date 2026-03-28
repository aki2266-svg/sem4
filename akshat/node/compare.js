var fs = require('fs')
fs.writeFileSync('test3.txt','Hello!!')
console.log('ak')
console.log('outside')
fs.writeFile('test4.txt','hello world!!',(err)=>{
     if(err)console.log ('error generated')
     else
     console.log('created')
  })
  console.log('outside')
 