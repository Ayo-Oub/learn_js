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
];