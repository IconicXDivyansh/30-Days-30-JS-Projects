const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");
// Interpolated
console.log("Hello I am a %s string!", "Interpolated");
// Styled
console.log(
  "%c Hello World",
  "font-size: 56px; color: palevioletred; font-family: helvetica neue; background: linear-gradient(to right, #ff9a9e, #fecfef);"
);
// warning!
console.warn("Here's a warning");
// Error :|
console.error("Here's an error using 'console.error'");

// Info
console.info("Here's an info message");
// Testing
console.assert(1 === 2, "That is wrong!");

// clearing
// console.clear();
// Viewing DOM Elements
console.log(document.querySelector("p"));
console.dir(document.querySelector("p"));
// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
//   console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
})
// counting
console.count("Counting");
console.count("Counting");
console.count("Counting");
console.count("Counting");
console.count("Some other");
console.count("Counting");
// timing
console.time("fetching data");
fetch("https://randomuser.me/api/?results=5")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching data");
        console.log(data);
    });   

// table
console.table(dogs);