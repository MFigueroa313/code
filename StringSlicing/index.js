// string slicking = creating a substring from a portion of another string
//                   from a portion of another string

//                   string.slick(start, end)

const fullName = "Michael Figueroa";

//let firstName = fullName.slice(0, 7);
//let lastName = fullName.slice(8);

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1)

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" "));

console.log(firstName)
console.log(lastName)




