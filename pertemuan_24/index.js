let bilangan = [30, 1, 2, 3.5, 10, 100];


let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil)); 
console.log(bilangan.sort(urutDariTerbesar)); 

let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort().reverse();

console.log(buah); 
buah.reverse(); 