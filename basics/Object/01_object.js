//sigleton object,object litrals

//object litrals
const sym = Symbol("12")
const user = {
    name : "Aditya",
    [sym] : "23",
    age : 21,
    greet : "hello",
    email : "aditya@gmail.com"
    

}

// console.log(user.email);

// Object.freeze(user) //chages will not apply
// user.email = "mygmail@mail"
// console.log(user.email);

// console.log(Object.keys(user));
// console.log(Object.values(user));

// const {email:gmail} = user //destructureing 
// console.log(gmail);
