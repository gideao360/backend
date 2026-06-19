 Versão tradicional
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

 Versão Arrow Functionn
const minArrow = (a, b) => (a < b ? a : b);

console.log(min(8, 3));      
console.log(min(2, 9));      
console.log(minArrow(8, 3)); 
console.log(minArrow(2, 9)); 