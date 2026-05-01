// develop a web application using express and ejs to accept mark of four test t1,t2,t3,t4 each outof 25 through a form using post method after submission display all entered marks in a tabular format along with total marks and determine the result if totalis 35 or more display pass in geen color other wise displayfail in red color
var expres=require('express')
var app=expres();
app.use(expres.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/",(req,res)=>
{
    res.render('form2');
  
});
app.post('/submit',(req,res)=>
    {
        const t1=parseInt(req.body.t1)
        const t2=parseInt(req.body.t2)
        const t3=parseInt(req.body.t3)
        const t4=parseInt(req.body.t4)
        var total=t1+t2+t3+t4
        res.render("fresult",{t1,t2,t3,t4,total})        
    })
 app.listen(9090,()=>{console.log("app start")});
  