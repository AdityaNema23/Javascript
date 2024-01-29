// console.log(this) //window obj

// function func(){
//     console.log(this)
// }
// func() 

// const obj = {
// Name : "Aditya",
// greet : function func(){
//     console.log(this);

//   }
// }         //current obj


// const obj = {
//     Name : "Aditya",
//     greet : () => {
//     console.log(this);
//       }
//     }  

// obj.greet();


const obj = {
    name: "Aditya",
    greet: () => {
        console.log(this);
    }
};

obj.greet(); // `this` inside the arrow function is inherited from the outer scope