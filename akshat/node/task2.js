// write a node js script to copy the content of one file to another without copy function
const fs=require('fs')
fs.writeFile('src.txt','abc',(err)=>{if (err) throw err
    console.log('done')
})
fs.readFile('src.txt',(err,data)=>{if (err) throw err
    console.log('copied data',data.toString())

fs.writeFile('des.txt',data,(err)=>{if (err) throw err
    console.log('copied')
})})