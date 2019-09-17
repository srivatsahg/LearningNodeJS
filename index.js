var rect = require('./rectangle.js');

function calculateRectangleAreaPerimeter(length,breadth){
    if((length < 0) || (breadth < 0)){
        console.log(`The values for length : ${length} and breadth : ${breadth} is invalid`);
    }
    else{
        // console.log(`Perimeter of the rectangle : ${rect.perimeter}`);
        // console.log(`Area of the rectangle : ${rect.area}`);

        console.log("Perimeter of the rectangle : " + rect.perimeter(length,breadth));
        console.log("Area of the rectangle : " + rect.area(length,breadth));
    }

}

calculateRectangleAreaPerimeter(10,30);
calculateRectangleAreaPerimeter(0,30);
