// let a = [23,4,523,45,65,42,23]


// a.unshift(24)
// console.log(a);
// a.pop()
// console.log(a);

// for(let i in a){

//     a[i] = a[i] + 1
// }
    // console.log(a);

    let person = {
        Name : "aditya",
        age : 21,
        class:"4th year",
        CurrentLearning : "JavaScript"
    }

    for (const ii in person) {
        console.log(ii,person[ii]);
    }