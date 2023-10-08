// if, else, nestad if

let kondisi1 = true;
let kondisi2 = false;

if (kondisi1) {
  console.log("ku kira aku kuat");
  if (kondisi2) {
    ("ternyata memang kuat");
  } else {
    ("kuat menahan sakit");
  }
} else {
  ("sakit adalah kelemahan");
}
document.getElementById("demo").innerHTML

// Switch case

let pilihan = "A";

switch (pilihan) {
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
    break;
  default:
    console.log("null");
}
console.log(pilihan);

// for statemen

for (let i = 0; i <= 10; i++) {
  console.log("nilai " + i);
}

//While, do while

let h = 0;
while (h <= 10) {
  console.log("nilai while" + h);
  h++;
}

let z = 50;
do {
  console.log("do while nilai " + z);
  z -= 5;
} while (z >= 10);

// function

function latihanThrow(x, y) {
  if (y == 0) {
    throw new Error("eror");
  }
  return x / y;
}
try {
  let hasil = latihanThrow(20, 5);
  console.log("nilai " + hasilBagi);
} catch (error) {
  console.log("");
}