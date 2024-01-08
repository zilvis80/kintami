let a = 9;
let b = 4;
let c = 2;

let didziausias = Math.max(a, b, c);
console.log('didziausias skaicius:', didziausias);

if (a > b && a > c) {
  console.log('a didziausias');
} else if (b < a && b > c) {
  console.log('b didziausias');
} else if (c > a && C > B) {
  console.log('c didziausias');
}

console.log((a + b + c) / 3);

let skaicius = 5;
let pradzia = 8;
let pabaiga = 10;

console.log('reziai [', pradzia, '-', pabaiga, ']');
console.log('duotas skaicius:', skaicius);
if (skaicius >= pradzia && skaicius < pabaiga) {
  console.log('skaicius patenka i rezius');
} else {
  console.log('skaicius nepatenka i rezius');
}

let vidurkis = 5;
let startas = 5;
let finisas = 8;

console.log('reziai [', startas, '-', finisas, ']');
console.log('duotas skaicius:', skaicius);
if (vidurkis >= startas && vidurkis < finisas) {
  console.log('skaicius patenka i rezius');
} else {
  console.log('skaicius nepatenka i rezius');
}
if (vidurkis < 5) {
  console.log('ar tiesa');
}
console.log('=====================================');

let f = 2;
let g = 5;

if (f > g || f === 0) {
  console.log('true');
}
if (g > f || g === 5) {
  console.log('fals');
}
if (f > g && f === 20) {
  console.log('melas');
}

if (g > f && g < 100) {
  console.log('pravalas');
}
