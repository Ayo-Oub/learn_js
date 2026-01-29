export const numbers_codes = [
  `let a = 10; // entier
let b = 3.14; // décimal
let c = -25; // négatif
let d = 1e3; // notation scientifique (1000)
let e = 2.5e-2; // 0.025`,
  `typeof a; // "number"`,
  `let x = 0 / 0; // NaN
let y = "abc" * 2; // NaN
NaN === NaN; // false
Number.isNaN(x); // true`,
  `1 / 0; // Infinity
-1 / 0; // -Infinity
Number.isFinite(10); // true
Number.isFinite(Infinity); // false`,
  `Number("123"); // 123
Number("12.5"); // 12.5
Number("abc"); // NaN`,
  `parseInt("42"); // 42
parseInt("42px"); // 42
parseInt("101", 2); // 5 (base 2)`,
  `parseFloat("3.14"); // 3.14
parseFloat("3.14px"); // 3.14`,
  `5 + 2; // 7
5 - 2; // 3
5 * 2; // 10
5 / 2; // 2.5
5 % 2; // 1`,
  `let n = 5;
n++; // 6
n--; // 5`,
  `let a = 5;
let b = a++; // b = 5, a = 6
let c = ++a; // c = 7, a = 7`,
  `Math.round(4.5); // 5
Math.floor(4.9); // 4
Math.ceil(4.1); // 5
Math.trunc(4.9); // 4`,
  `Math.pow(2, 3); // 8
2 ** 3; // 8
Math.sqrt(16); // 4`,
  `Math.min(1, 5, 3); // 1
Math.max(1, 5, 3); // 5


Math.random(); // nombre entre 0 et 1`,
  `Math.floor(Math.random() * 10) + 1;`,
  `let x = 3.14159;
x.toFixed(2); // "3.14"
let y = 123.456;
y.toPrecision(4); // "123.5"`,
  `"5" + 2; // "52"
"5" - 2; // 3`,
  `Number("5") + 2; // 7`,
];
export const numbers_codes_exo = [
  `let a = 10 + 2 * 3;
let b = (10 + 2) * 3;
let c = 20 / 5 + 2;`,
];