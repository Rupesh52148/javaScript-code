const marval_heros=["Iran Man","spider Man","Thor"]
const dc_heros=["superman","petman","...."]
// marval_heros.push(dc_heros)
// console.log(marval_heros)
//  const all_heros=marval_heros.concat(dc_heros)
// console.log(all_heros);

//Spread Operator INSTREATED TOPIC FOR INTERVIEW
const all_heros=[...marval_heros,...dc_heros]
console.log(all_heros);

const another_array=[1,5,7,[4,8,9,10,[20,7,5,4]],41,["Rupesh","aryan",[45,8]],12]
const new_another_arrays=another_array.flat(Infinity)
console.log(new_another_arrays);

console.log(Array.isArray("rupesh"))
console.log(Array.from("Rupesh"))
let a=199;
let b=99
let c=200
let d="Rupesh"
let new_array=Array.of(a,b,c,d)
console.log(new_array)
console.log(Array.of("I am rupesh kumar i belong to madhepura bihar"))



