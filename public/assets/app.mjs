// class ClassA {
//   constructor(naam, umar, university) {
//     this.naam = naam;
//     this.umar = umar;
//     this.university = university;
//   }
//   foo() {
//     console.log(`My name is ${this.naam}
//         \n and my age is ${this.umar}
//         \n and my university is ${this.university}`);
//   }
//   static statiFunction() {
//     console.log("this is my ClassA staticFuntion");
//   }
// }

// class ClassB extends ClassA {
//   constructor(name, age, uni, naam, umar, university) {
//     super(naam, umar, university);
//     // this is called Constructor Method
//     this.name = name;
//     this.age = age;
//     this.uni = uni;
//   }

//   info() {
//     // this is called Prototype Method
//     super.foo();
//     console.log(`My name is ${this.name}
//     \n and mye age is ${this.age}
//     \n and my university is ${this.uni}`);
//   }

//   static statiFunction() {
//     // This is caled Static Method
//     super.statiFunction();
//     console.log("this is my StaticFunction");
//   }
// }

// const student1 = new ClassA();
// const student2 =new ClassB("wasem", 25, "myUni", "nadeem", 23, "VR");
// student2.info();
// console.log(student1.naam)

// class Check1 {
//   constructor(greet) {
//     this.name = "sami";
//     this.greet = greet;
//   }

//   foo() {
//     console.log(`hello my dear ${this.name} ${this.greet}`);
//   }
// }

// class Check2 extends Check1 {
//   constructor(greet) {
//     super(greet);
//   }

//   info() {
//     super.foo();
//   }
// }

// const checking2 = new Check2("Good Morning Sami");
// checking2.info();

// const checking1 = new Check1("Good Morning Sami");
// checking1.foo();

// class AutomaticCall {
//   constructor() {
//     this.name = "waseem";
//     this.age = 25;
//     console.log("hello duniya");
//   }

//   hello() {
//     console.log(this.name);
//   }

//   static staticMethod() {
//     console.log("hello my dear");
//   }
// }
// let obj = new AutomaticCall();
// obj.hello();
// AutomaticCall.staticMethod();

// let obj = {
//   name: "waseem",
//   age: 25,
// };

// console.log(obj);

// class factory {
//   constructor(car, model) {
//     this.car = car;
//     this.model = model;
//   }

//   static factoryMethod(car, model) {
//     return new factory(car, model);
//   }
// }

// let carDetail = factory.factoryMethod("toyota", 2018);

// console.log(carDetail);

// class Utility {
//   static calculator(number) {
//     return number * number;
//   }
// }

// let result = Utility.calculator(5);
// console.log(result);

// class Circle {
//   static PI = 3.14;

//   static calculateArea(round) {
//     return Circle.PI * round * round;
//   }
// }

// let areaCount = Circle.calculateArea(8);
// console.log(areaCount);

// class Helper {
//   static formetText(text) {
//     return text.trim().toUpperCase();
//   }
// }

// let formatedText = Helper.formetText("     hello     ");
// console.log(formatedText);

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   method1() {
//     console.log(this.name);
//   }

//   method2() {
//     console.log(this.age);
//   }
// }

// const person1 = new person("waseem", 25);

// console.log(person1);

// let arr = [
//   {
//     name: "waseem",
//     age: 25,
//     uni: "VU",
//   },
//   {
//     name: "nadeem",
//     age: 25,
//     uni: "VU",
//   },
//   {
//     name: "faheem",
//     age: 25,
//     uni: "VU",
//   },
//   {
//     name: "naveed",
//     age: 25,
//     uni: "VU",
//   },
// ];
// let num = 0;
// let giveBack = arr.map((key) => {
//   console.log(num++);
// });

// console.log(giveBack);
