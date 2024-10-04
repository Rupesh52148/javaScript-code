//Object Letrals;
const mySy=Symbol("key")
const JsUser={
    name:"Rupesh",
    age:22,
    [mySy]:"newKey1",
    email:"rupesh@gmail.com",
    pass:"rupesh@12" 
}
// console.log(JsUser.age);
// console.log(JsUser["email"])
// console.log(JsUser[mySy])
// console.log(typeof JsUser[mySy])
JsUser.email="rupesh@yahoou.com"
// Object.freeze(JsUser)
JsUser.email="rupesh@chatgpt.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS User ")
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js user ${JsUser.name}`)
}
// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())

const tendier =new Object()   //singleton Object 

//Literal object or Normal object
const regularUser={  
        id:123,
        email:"rupesh@gamil.com",
        users:{
            UserName:{
                firstName:"Rupesh",
                lastName:"Kumar"
            }
        }
}
// console.log(regularUser.users.UserName.firstName)//Access the element in nestated object whith the help of dout operator
const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'a',5:'b',6:'c'}

//Merge the onject whith the help of inbild function.Merge the object same as Array 
// const obj3={obj1,obj2}//Directly the push the obj1 and obj2 in the obj3;

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}//Merge the object whit the help of spread operator. Most of the time use this operator 
console.log(obj3)
console.log(obj1)


