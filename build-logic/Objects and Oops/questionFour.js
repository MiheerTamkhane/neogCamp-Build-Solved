const cartItems = [
  {
    id: "101",
    name: "Oreo",
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: "102",
    name: "Red Bull",
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: "103",
    name: "Dairy Milk Silk",
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: "104",
    name: "Pulse Candy Pack",
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];
//PRINT :
// the total No. of items
for (let i = 0; i < cartItems.length; i++) {
  console.log(cartItems[i].name);
}
// the total cart value
// the total discounted value(sum of dicounted values on each item) based on the given discount
// total tax amount (18% tax, calculated on total cart value)
