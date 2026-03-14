// write a script to define two json object Name division one and division two having an Array to store Name of student this Name should be sorted alphabetiacally and should be displayed in console 
var a={
    
    "division_1":{"name":['z','b','h']},
    "division_2":{"name":['o','s','w']}
    
}
const div1_data=a.division_1.name
const div2_data=a.division_2.name
var combine=div1_data.concat(div2_data).sort()
console.log(combine)