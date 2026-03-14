//initialize two variable with two value and increment both variable and display addition both interval of 1 sec
function add(){
    for(a=0;a<=5;a++){
        for(b=0;b<=5;b++)
        {
            console.log("addition:",a+b)
        }
    }
    
}
setInterval(add,1000)