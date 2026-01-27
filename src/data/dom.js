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