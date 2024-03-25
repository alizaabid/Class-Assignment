var students =["student1", "student2"];

type student1type = {
    firstName:string;
    lastName:string;
    cnicNo: number;
    isstudent:boolean;
    subject:string[];}

    var student1:student1type ={
        firstName:"aliza",
        lastName:"abid",
        cnicNo: 1234567,
        isstudent:true,
        subject:["math", "english"],
     }

    type student2type ={
    firstName:string;
    lastName:string;
    cnicNo: number;
    isstudent:boolean;
    subject:string[];
}

var student2:student2type ={
    firstName:"sabahat",
    lastName:"abid",
    cnicNo: 44449875,
    isstudent:true,
    subject:["science", "urdu"],
}

console.log(students[1]);
    console.log(student1);
