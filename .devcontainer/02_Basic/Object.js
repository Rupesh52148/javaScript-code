//Object Letrals;
const mySy=Symbol("key")
const JsUser={
    name:"Rupesh",
    age:22,
    [mySy]:"newKey1",
    email:"rupesh@gmail.com",
    pass:"rupesh@12" 
}
console.log(JsUser.age);
console.log(JsUser["email"])
// console.log(JsUser[mySy])
console.log(typeof JsUser[mySy])