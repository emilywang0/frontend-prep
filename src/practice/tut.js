// Arrow Functions

const handleClick = () => {};

// anonymous functions
<button
  onClick={() => {
    console.log("clicked!");
  }}
></button>;


// Ternary Operations

let age = 10;
let name = age === 10 ? "Emily": null;
// OR
let name2 = age === 10 && "Emily";

const conditionalStuff = () => {
    return age === 10 ? <h1>I am 10 years old</h1> : <p>I am not 10 years old</p>;
}

// Map

let names = ["Emily", "Jessica", "Jocelyn", "Emily"];

names.map((name) => {
    return <h1>{name}</h1>;
})

// Rounded brackets have implicit return
names.map((item) => (<h1>{item}</h1>))

// Filter

names.filter((name) => {
    return name !== "Emily";
})

// Reduce

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr, idx, arr) => {
  return acc + curr;
}, 0);
// 0 is the intial value, acc will set to 0 at beginning then it will be the prev computation
let total_marks = students.reduce((acc, curr) => acc += curr.marks, 0);

// Objects

const person = {
    firstName: "Emily",
    gender: "F",
    favouriteFood: "Poke"
};

const person2 = {...person, name: "Jack"}

const names2 = [...names, "Emily"]


const { firstName, favouriteFood, gender } = person;

// Loops

function getCount(objects) {
  let ans = 0;
  let person = {name: "Emily", age: 20, city: "Vancouver" }


  for (let o of objects) {
    // loops over elements: notice OF keyword
  }

  for (let key in person) {
    // loops over KEYS in the object (name, age, city)
  }

  objects.forEach(o => {
    if (o.x == o.y) ans++;
  });

  ans = objects.filter((o) => (o.x == o.y)).length;


}


// Class

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    let perimeter = 0;
    this.sides.forEach((side) => {perimeter += side});
    return perimeter;
  }
}

const names_yes = students.map((student)=>(student.name.toUpperCase()))