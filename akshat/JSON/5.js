const sub={"fsd":[
    {
        topic:'html',
        course:"beginner",
        content:['tags','table','form']
    },
    
    {
        topic:'js',
        course:"beginner",
        content:['for','while','for_in']
    },

    {
        topic:'python',
        course:"beginner",
        content:['for','while','for_each']
    },

]
}
for( i in sub.fsd){
    for( j in sub.fsd[i]){
        console.log(sub.fsd[i][j])
    }
}