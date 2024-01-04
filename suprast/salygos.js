let x = 8;
let y = 100;
let z = 64;

if (x === y) {
  console.log('skaiciai yra lygus');
}
if (y === z) {
  console.log('skaiciai yra lygus');
}
if (x > y) {
  console.log('pirmas skaicius didesnis');
}
if (y > z * 2) {
  console.log('antras skaicius didesnis');
}
if (x % 2 === 0) {
  console.log('koks likutis');
}
if (y % 2 !== 0) {
  console.log('nera lygus');
}
if (z > 0) {
  console.log('nupiesk ar tikrai');
}
if (x < 0) {
  console.log('neigiamas');
}
if (y % 4 === 0) {
  console.log('dalinasi is keturiu');
}

if (z % 8 === 0) {
  console.log('dalynasi');
}
let amzius = 17;
if (amzius >= 18) {
  console.log('gali balsuoti');
}

let a = 6;
let b = 8;
let c = 10;
console.log((a + b + c) / 3);
if ((a + b + c) / 3 < 0) {
  console.log('vidurkiks geras');
}
let n = 5;
for (let i = 1; i <= 5; ++i) console.log(n + ' * ' + i + ' = ' + n * i);
let s = 8;
console.log((8 * 2) / 2);

let t = 4;
let r = 9;

console.log('suma:' + (t + r));
console.log('skirtumas:' + (t - r));
console.log('sandauga:' + t * r);
console.log('dalmuo:' + t / r);

let i = 7;
let o = 8;
let p = 9;

if (i > o) {
  console.log('geras');
} else if (o > p) {
  console.log('antras');
} else if (p > i) {
  console.log('trecias');
}
