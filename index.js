const rect = require("./rectangle");


const SOLVE =(l,b)=>{
    console.log("Before the function\n");

    rect(l,b, (err, rectangle) =>{
        if(err){
            console.log("Error",err.message)
        }
        else{
            console.log("Area is : ",rectangle.area());
            console.log("Perimeter is : ",rectangle.perimeter())
        }
    });

    console.log('\nAfter funciton')


};

SOLVE(2,0);