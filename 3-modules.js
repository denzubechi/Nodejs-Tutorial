//Modules-Encapsulated code(Only share minimum)
//Every file in node is a module.



/*Different way of creating a function
function sayHello(course){
    console.log(`${course} is a nice course`)
}*/

const names = require("./4-names"); //OR
//const {john, peter} = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor")
require("./7-mind-grenade");
console.log(names);
console.log(data);

sayHi(names.vivian)
sayHi("De_nzubechi") 