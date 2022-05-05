const root = document.getElementById("root");
const h1 = document.createElement("h1");

h1.textContent = "Hi React, I am using VanillaJS!";
h1.className = "header";
root.appendChild(h1);
console.log(h1);

const element = <h1 className="header">Hi VanillaJS, I am using React</h1>;
ReactDOM.render(
    element,
    document.getElementById("root")
);

console.log(element)