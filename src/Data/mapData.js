const mapCods = [
`array.map(function(element, index, array) {
  // retourne la nouvelle valeur
})
`,
`const nombres = [1, 2, 3, 4];
const doublés = nombres.map((n) => n * 2);

console.log(doublés); // [2, 4, 6, 8]
`,
  `const lettres = ['a', 'b', 'c'];
const numérotées = lettres.map((lettre, index) => \`\${ index + 1} - \${ lettre }\`);

console.log(numérotées);
// ["1 - a", "2 - b", "3 - c"]
`,

];
export default mapCods;