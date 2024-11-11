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

// Filter

names.filter((name) => {
    return name !== "Emily";
})

// Objects

const person = {
    firstName: "Emily",
    gender: "F",
    favouriteFood: "Poke"
};

const person2 = {...person, name: "Jack"}

const names2 = [...names, "Emily"]


const { firstName, favouriteFood, gender } = person;