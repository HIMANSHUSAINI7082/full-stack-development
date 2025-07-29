//string
let name = "himanshu";
console.log(name); 
//number
let age = 20;
console.log(age);
console.log("my age is"+age);
console.log("my age is ", age);
//float
let h=  2.5;
console.log(h);


let ismarried = false;
console.log(ismarried); 
// it is a case sensitive language
let a=10;
let A = 20;
console.log(a,A);
//undefined
let x;
console.log(x);
//object is a form of dictionary
let person = {
    "name":"himanshu",
    "age":"20",
    "number":"45535553",
    "address":{
        "city":"delhi",
        "pincode":"46464364"
    }
}
console.log(person);

let address = {
    "key1":"string value",
    "key1":12344,
    "homeaddress":{"city":"delhi"},
    "officeaddress":{"city":"noida"}
}
console.log(address);
console.log(address.homeaddress.city);

//print ciy of officeaddress
console.log("my office adresss is"+ address.officeaddress.city)


//array datatype
let myfriends =  ["ankit","priyanshu","dipanshu"];
console.log(myfriends);
console.log(myfriends[0]);
console.log(myfriends[2]);
console.log("my friends are"+myfriends[1]+"&"+myfriends[2]);//string cocatenation
console.log('my friends are ${ my friends[1]} and ${myfriends[3]}');//tmplate literal


//date datatype
let currentDate = new Date();//date is a class
console.log(currentDate);
let myDOB =new Date("1234-04-12");
console.log(myDOB);
console.log("dob year"+myDOB.getFullYear());
console.log("dob month"+myDOB.getMonth());
console.log("dob date"+myDOB.getDate());

console.log("expression " +1+2);
console.log("expression " +(1+2));