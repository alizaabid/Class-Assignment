//example1
let dayOff:string = "sunday";
function  myHoliday(){console.log(`today is ${dayOff} so i go for hiking`)}
 myHoliday()


 //example2
 function myName(name:string){console.log(name.toUpperCase()),
    console.log(name.toLowerCase())}

 myName("aliza abid")


 //example3
 function myInfo(name:string,
    qualification:string,age:number,city:string,now?:string

 ){console.log(` My name is ${name} . I completed a ${qualification}. My age is 
    ${age}. I live in ${city}. Today ${now}`)}
    myInfo("Aliza Abid", "Masters in psychology", 22,"karachi", " I started a coding and and also practice it")


 //example 4
 interface informationtype {fullName:string,
    age:number,
isMarried:boolean,
cnic?:number,
phoneNumber: number
}

function myInformation(fullName:string,
    age:number,
isMarried:boolean,
cnic:number,
phoneNumber: number):informationtype{
   let information:informationtype = {fullName, age,isMarried,cnic, phoneNumber}
   return information
}

let user1 = myInformation ("Aliza Abid", 22, false, 78878 , 967532356)
console.log(user1)

