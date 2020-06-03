const express=require('express');
const app= express();

app.listen(process.env.PORT || 8080,()=>
    console.log("server at 8080")
);


app.use(express.static('public'));