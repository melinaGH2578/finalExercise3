const firstname = prompt(" enter your name");
const lastname = prompt(" enter your lastname");


let fn = firstname.replace(/ +/g, "");
let ln = lastname.replace(/ +/g, "");
let fullname = fn + ln; 

console.log( fullname.length);






// let ss = "     helo   world";
// let sos = ss.replace(/ +/g, "");
// console.log (sos);