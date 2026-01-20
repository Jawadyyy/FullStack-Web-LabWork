const fs = require("fs");

const data = fs.readFileSync("products.json", "utf8");

const products = JSON.parse(data);

console.log("Product List:");
products.items.forEach(p => console.log("-", p.name));

products.items.push({ id: 3, name: "Keyboard", price: 40 });
fs.writeFileSync("products.json", JSON.stringify(products, null, 2));

console.log("\nNew product added and file updated successfully!");
