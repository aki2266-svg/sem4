const student=[{
    'name':'abc',
    'age':30
},
{
    'name':'abc',
    'age':30
}
]
const fs=require('fs')
fs.writeFileSync('1.txt',JSON.stringify(student))
var a=fs.readFileSync('1.txt','utf-8')
console.log(a)