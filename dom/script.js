// Task 1
// let button = document.createElement("button");
// let buttonText = document.createTextNode("Why do I always get clicked!");
// button.appendChild(buttonText);
// document.body.appendChild(button);
// addEventListener("click", function () {
//     alert("This is getting old!")
// });


// Task 2
// let button = document.getElementById("button");
// button.addEventListener("click", function () {
//     let message = document.getElementById("text-box").value;
//     alert(message);
// });


// Task 3
// let div = document.getElementById("div");
// div.addEventListener("mouseenter", function () {
//     div.style.backgroundColor = "red";
// });
// div.addEventListener("mouseleave", function () {
//     div.style.backgroundColor = "black";
// });


// Task 4
// let p = document.getElementById("p");
// p.addEventListener("click", function () {
//     const vals = "0123456789ABCDEF";
//     let colorString = "#";
//     for (let i = 0; i < 6; i++) {
//         let char = vals[Math.floor(Math.random() * vals.length)];
//         colorString += char
//     };
//     p.style.color = colorString;
// });


//Task 5
// let button = document.getElementById("button");
// let div = document.getElementById("div");
// button.addEventListener("click", function () {
//     let span = document.createElement("span");
//     div.appendChild(span);
//     let text = document.createTextNode("Josh");
//     span.appendChild(text);
// });


// Task 6
let friends = ["Chad", "Dylan", "Josh", "Dillon", "Nels", "Anna", "Kacie", "Kevin", "Austin", "Ginger"];
let button = document.getElementById("button");
let ul = document.getElementById("ul");
button.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    };
});