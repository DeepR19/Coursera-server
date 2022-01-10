const rect = require("./rectangle");


const SOLVE =(l,b)=>{
    if(l<=0 || b<=0){
        console.log('error');
    }
    else{
        console.log("hence area is"+rect.area(l,b));
        console.log("hence perimeter is"+rect.perimeter(l,b));
    }
};

SOLVE(2,4);