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
];