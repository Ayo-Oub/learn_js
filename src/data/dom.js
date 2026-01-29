export const codes = [
  `document
 └── html
      ├── head
      └── body
           ├── h1
           └── p
`,
  `document.body
document.title
document.getElementById("app")
`,
];
export const codes_select_Ele_dom = [
  `<h1 id="title">Hello</h1>
`,
  `const titre = document.getElementById("title");
`,
  `<p class="item">1</p>
<p class="item">2</p>
`,
  `const items = document.getElementsByClassName("item");
console.log(items); // collection
`,
  `for (let el of items) {
  console.log(el);
}
`,
  `const paragraphs = document.getElementsByTagName("p");
`,
  `const firstItem = document.querySelector(".item");
`,
  `const allItems = document.querySelectorAll(".item");
allItems.forEach(el => console.log(el));
`,
];
export const codes_modf_conte_dom = [
  `<p id="msg">Bonjour</p>
`,
  `const msg = document.getElementById("msg");
msg.textContent = "Salut Ayoub";
`,
  `element.innerText = "Texte visible seulement";
`,
  `<div id="box"></div>
`,
  `const box = document.getElementById("box");
box.innerHTML = "<strong>Important</strong>";
`,
  `<input id="name" value="Ayoub">
`,
  `const input = document.getElementById("name");
input.value = "Ahmed";
`,
];
export const codes_modf_attr_dom = [
  `<img id="img" src="photo1.jpg">
`,
  `const img = document.getElementById("img");
console.log(img.getAttribute("src")); // photo1.jpg
`,
  `img.setAttribute("src", "photo2.jpg");
img.setAttribute("alt", "Nouvelle image");
`,
  `img.removeAttribute("alt");
`,
  `img.src = "photo3.jpg";
link.href = "https://google.com";
input.value = "Ayoub";
`,
  `element.id = "newId";
`,
  `element.hasAttribute("disabled");
`,
  `<button id="btn">Activer</button>
<input id="input" disabled>
`,
  `const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.addEventListener("click", () => {
  input.removeAttribute("disabled");
});
`,
];
export const codes_modf_sty_class_dom = [
  `const box = document.querySelector(".box");

box.style.backgroundColor = "red";
box.style.width = "200px";
box.style.borderRadius = "10px";
`,
  `box.classList.add("active");
`,
  `box.classList.remove("active");
`,
  `box.classList.toggle("active");
`,
  `box.classList.contains("active");
`,
  `.dark {
  background: #111;
  color: white;
}
`,
  `const btn = document.querySelector("#toggle");
const body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
`,
];
export const codes_create_delete_ele_dom = [
  `const div = document.createElement("div");
`,
  `div.textContent = "Hello DOM";
`,
  `div.innerHTML = "<strong>Hello</strong>";
`,
  `div.classList.add("box");
div.setAttribute("id", "card1");
`,
  `document.body.append(div);
`,
  `parent.appendChild(div);
`,
  `parent.prepend(div);
`,
  `div.remove();
`,
  `parent.removeChild(div);
`,
  `<button id="add">Ajouter</button>
<div id="container"></div>
`,
  `const btn = document.getElementById("add");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.textContent = "Nouvelle carte";
  card.classList.add("card");

  container.append(card);
});
`,
  `const clone = card.cloneNode(true);
container.append(clone);
`,
];
export const codes_nav_dom = [
  `element.parentElement
`,
  `const p = document.querySelector("p");
console.log(p.parentElement);
`,
  `element.children
`,
  `element.firstElementChild
`,
  `element.lastElementChild
`,
  `element.nextElementSibling
`,
  `element.previousElementSibling
`,
  `<ul id="list">
  <li>Un</li>
  <li class="active">Deux</li>
  <li>Trois</li>
</ul>
`,
  `const active = document.querySelector(".active");

active.parentElement.style.border = "2px solid red";
active.nextElementSibling.style.color = "green";
active.previousElementSibling.style.color = "blue";
`,
];
export const codes_events_dom = [
  `<button id="myButton">Cliquez-moi</button>
`,
  `const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("Bouton cliqué !");
});
`,
  `button.addEventListener("mouseover", function() {
  console.log("Souris au-dessus du bouton");
});
`,
  `button.addEventListener("mouseout", function() {
  console.log("Souris quittant le bouton");
});
`,
  `<input type="text" id="myInput" placeholder="Tapez quelque chose">
`,
  `const input = document.getElementById("myInput");

input.addEventListener("keydown", function(event) {
  console.log("Touche enfoncée :", event.key);
});
`,
  `element.addEventListener("click", (event) => {
  console.log(event.target);
});
`,
  `form.addEventListener("submit", (e) => {
  e.preventDefault();
});
`,
  `e.stopPropagation();
`,
];