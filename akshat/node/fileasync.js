const fs=require ('fs')
// fs.mkdir('hi',(err)=>{
//     if(err)throw err
//     console.log('created')
// })
// fs.rmdir('hi',(err)=>{
//      if(err)throw err
//      console.log('deleted')
//  })
// fs.writeFile('data.txt','hello world!!',(err)=>{
//      if(err)throw err
//      console.log('created')
//  })
 
// fs.appendFile('data.txt','akshat',(err)=>{if (err) throw err
// console.log('apended')
// })
// fs.readFile('data.txt',(err,data)=>{if(err)throw err
//      console.log(data.toString())})
// fs.rename('data.txt','test2.txt',(err)=>{if (err) throw err
//     console.log('renamed')
// })
// fs.copyFile('test2.txt','ak.txt',(err)=>{if (err) throw err
//     console.log('copied')
// })
fs.unlink('ak.txt',(err)=>{if (err) throw err
    console.log('gone')
})