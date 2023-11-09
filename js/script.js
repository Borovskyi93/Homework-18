console.log({}.prototype === {}.prototype); //True
//Вони посилаються на один батьківський прототип __proto__ (new Object);

function sayHello() {};
console.log(sayHello.prototype === sayHello.__proto__);//False
//Посилаються на різні батькіські прототипи

function sayHello() {};
function sayGoodBye() {};
console.log(sayHello.__proto__ === sayGoodBye.__proto__); //True
//Вони посилаються на один батьківський прототип __proto__;
console.log(sayHello.prototype === sayGoodBye.prototype); //False
//Посилання на різні бітьківськи прототипи об'єктів

let arrowFunc = () => {};
console.log(arrowFunc.prototype === Object.prototype);

let age = 22;
console.log(age.prototype === Number.prototype); //False
console.log(age.__proto__ === Number.prototype); //True
//__proto__ посилається на prototype функції конструктора (new Number);

function Test() {}
console.log(Test.__proto__ === Function.prototype);
//__proto__ посилається на prototype функції конструктора (new Function);

let num = 77;
console.log(num.__proto__ === Number.prototype);
//__proto__ посилається на prototype функції конструктора (new Number);
