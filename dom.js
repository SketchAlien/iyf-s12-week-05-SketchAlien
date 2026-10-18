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

//Step 2
const headerEl = document.querySelector("header");
const navInsideHeader = headerEl.querySelector("nav");
const parentofFirstNavLink = firstNavLink.parentElement;
const articleEl = document.querySelector("article");
const nextSiblingOfArticle = articleEl.nextElementSibling;
const navUL = document.querySelector("nav ul");
const childLis =navUL.children;
const bodyFromFooter = footer.parentElement;
const closestHeader=firstNavLink.closest("header");
const closestNav=firstNavLink.closest("nav");

console.log({vanInsideHeader: parentofFirstNavLink, nextSiblingOfArticle, childLis, bodyFromFooter, closestHeader, closestNav});

//step 3
h1. textContent = "Exploring the DOM with SketchAlien";

firstNavLink.href = "https://developer.mozilla.org";
firstNavLink.target = "_blank";
firstNavLink.rel = "noopener";

const articleId = articleEl.dataset.id;
const articleCategory = articleEl.dataset.category;
console.log(articleId, articleCategory);
articleEl.dataset.status = "reviewed";

const contentForHighlight = document.querySelector(".content");
if (contentForHighlight) {
  contentForHighlight.classList.add("highlight");
}

h1.classList.add("highlight");