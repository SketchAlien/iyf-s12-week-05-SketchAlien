const check = (label, ok) => console.log(`${ok ? "✅" : "❌"} ${label}`);

//Step 1
//TODO 1
const h1 = document.querySelector("h1");
const contentElements = document.querySelectorAll(".content");
const contactform = document.getElementById("contact-form");
const emailInput = document.querySelector("#contact-form #email");
const navListItems = document.querySelectorAll("nav li");
const firstNavLink = document.querySelector(".nav-link");
const lastParagraph = document.querySelector("article p:last-of-type");
const SubmitBtn = document.querySelector("button");
const h2InMain = document.querySelectorAll("main h2");
const footer = document.querySelector("footer");

console.log(document.querySelector(".does-not.exist")); // null

const navTexts = Array.from(navListItems).map(li => li.textContent);
console.log(navTexts); // ["Home", "About", "Contact"]