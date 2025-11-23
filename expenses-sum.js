const items=[12.99,4.5,7.0,19.99];
const total=items.reduce((a,b)=>a+b,0);
const fmt=total.toFixed(2);
console.log(`Total: $${fmt}`);

// Only set window.TOTAL when running in the browser
if (typeof window !== "undefined") {
  window.TOTAL = fmt;
}
