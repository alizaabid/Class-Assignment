
interface studentType {
    firstName: string
    lastName:string
    cnicNo: number
    isstudent:boolean
    subject:string[] };



    let student1:studentType ={
        firstName:"aliza",
        lastName:"abid",
        cnicNo: 1234567,
        isstudent:true,
        subject:["math", "english"],
     }

    
let student2:studentType={
    firstName:"sabahat",
    lastName:"abid",
    cnicNo: 44449875,
    isstudent:true,
    subject:["science", "urdu"],
}

console.log(student1.lastName.length);
console.log(student1);
console.log(student2.subject);

