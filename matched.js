const numbers = [ 45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i ++){
//   const number = numbers[i];
//   console.log(number);
// }
for(const number of numbers){
  console.log(number);
}

const products = [
  {id: 1, name: 'xiami Phone One Night', price: 20000},
  {id: 2, name: 'i Phone', price: 20000},
  {id: 3, name: 'Mac Book Air', price: 1190000},
  {id: 4, name: 'Lenovo Yoga Laptop 2025', price: 20000},
  {id: 5, name: 'Dell inspiron Laptop', price: 20000},
  {id: 5, name: 'Asus inspiron LapTOp', price: 20000},
  {id: 6, name: 'Samsung Phone note 7', price: 20000},
  {id: 7, name: 'Nokia Old age Phone gone', price: 20000},
  {id: 8, name: 'phone One', price: 20000},
];
// for(const product of products){
//   console.log(product);
// }

function matchedProducts(products, search){
  const matched = [];
  for(const product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
      matched.push(product);
    }
  }
  return matched;
}
const result = matchedProducts(products, 'laptop');
console.log(result);