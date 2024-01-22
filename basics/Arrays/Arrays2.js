const arr = [1,2,3,4,5,6,7]
const arr2 = [8,9,10]
const arr4 = [11,12,13]
// arr.push(arr2);
// console.log(arr); //[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10 ] ]

// const arr3 = arr.concat(arr2);
// console.log(arr3);//[   1, 2, 3, 4, 5, 6, 7, 8 , 9, 10 ]

// spread method 

// const myArr = [...arr,...arr2,...arr4];
// console.log(myArr);//[1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13]

// arr.push(arr2,arr4)
// console.log(arr);//[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10 ], [ 11, 12, 13 ] ]

const newArr = [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10 ], [ 11, 12, 13,[23,87,9] ],[23,54]] 

const real = newArr.flat(2)
console.log(real);// [1, 2,  3,  4,  5,  6,  7, 8, 9, 10, 11, 12, 13, 23, 87, 9, 23, 54]