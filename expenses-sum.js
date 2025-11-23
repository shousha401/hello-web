const items=[12.99,4.5,7.0,19.99];
const total=items.reduce((a,b)=>a+b,0);
console.log(`Total: $${total.toFixed(2)}`);
