let obj ='{"var1":"lj","var2":"university"}'
console.log(obj)
var a=JSON.parse(obj)
console.log(a.var1)
let person={name:"xyz",age:20,city:"abc",address:{state:"guj",country:"ind"},skill:["python","sql","css"]}
var b=JSON.stringify(person)
console.log(b)
a.var2="college"
console.log(a)
a["var2"]="university"
console.log(a)
