console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined >= 0);
console.log(undefined == 0);



/*
The reason is that an equality check == and comarisons < > >= <= work differnt
Comparisions convert null to number , treating it as 0.
Thats why null>= 0 is true and others are false
*/

