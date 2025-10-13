// // function personMaker(name,age){
// //     const person = {
// //         name: name,
// //         age: age,
// //         talk(){
// //             console.log(`haai my name is ${this.name}`);
// //         },
// //     };
// //     return person;
// // }
// // function Person(name,age){
// //     this.name = name;
// //     this.age = age;
    
// // };

// // Person.prototype.talk= function(){
// //     console.log(`Hi my name is ${this.name}`);
// // };

// class Person {
//     cosntructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//      talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// };


// let p1 = new Person("manideep",21);
// let p2 = new Person("sravani",21);


class Students {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hii, my name is ${this.name}`);
    }
}
class Marks extends Students{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks
    }
}
let s1 = new Marks("manideep",34,300);