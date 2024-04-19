"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//example1
let dayOff = "sunday";
function myHoliday() { console.log(`today is ${dayOff} so i go for hiking`); }
myHoliday();
//example2
function myName(name) {
    console.log(name.toUpperCase()),
        console.log(name.toLowerCase());
}
myName("aliza abid");
//example3
function myInfo(name, qualification, age, city, now) {
    console.log(` My name is ${name} . I completed a ${qualification}. My age is 
    ${age}. I live in ${city}. Today ${now}`);
}
myInfo("Aliza Abid", "Masters in psychology", 22, "karachi", " I started a coding and and also practice it");
function myInformation(fullName, age, isMarried, cnic, phoneNumber) {
    let information = { fullName, age, isMarried, cnic, phoneNumber };
    return information;
}
let user1 = myInformation("Aliza Abid", 22, false, 78878, 967532356);
console.log(user1);
