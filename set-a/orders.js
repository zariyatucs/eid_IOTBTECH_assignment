const orders = [
  {
    id: 1,
    customer: "Alice",
    items: ["Pizza", "Salad"],
    total: 45.0,
    status: "delivered",
  },
  { id: 2, customer: "Bob", items: ["Burger"], total: 15.0, status: "pending" },
  {
    id: 3,
    customer: "Alice",
    items: ["Burger", "Fries"],
    total: 20.0,
    status: "delivered",
  },
  {
    id: 4,
    customer: "Carol",
    items: ["Pizza", "Fries"],
    total: 30.0,
    status: "pending",
  },
  {
    id: 5,
    customer: "Alice",
    items: ["Pasta"],
    total: 18.0,
    status: "cancelled",
  },
  {
    id: 6,
    customer: "Bob",
    items: ["Salad", "Juice"],
    total: 12.0,
    status: "delivered",
  },
];

// 1. All orders by Alice
const aliceOrders = orders.filter((o) => o.customer === "Alice");
console.log("Alice's orders:", aliceOrders);

// 2. Total spent by Alice
const aliceTotal = aliceOrders.reduce((sum, o) => sum + o.total, 0);
console.log("Alice total spent: $" + aliceTotal.toFixed(2)); // $83.00

// 3. All unique food items
const allItems = orders.flatMap((o) => o.items);
const uniqueItems = [...new Set(allItems)];
console.log("Unique food items:", uniqueItems);

// 4. Group orders by status
const byStatus = orders.reduce((groups, order) => {
  const key = order.status;
  if (!groups[key]) groups[key] = [];
  groups[key].push(order);
  return groups;
}, {});
console.log("Orders by status:", byStatus);

// Product search / filter
const products = [
  { id: 1, name: "Wireless Headphones", price: 79.99, category: "Electronics" },
  { id: 2, name: "Running Shoes", price: 59.99, category: "Footwear" },
  { id: 3, name: "Coffee Maker", price: 49.99, category: "Kitchen" },
  { id: 4, name: "Yoga Mat", price: 25.0, category: "Sports" },
  { id: 5, name: "Bluetooth Speaker", price: 39.99, category: "Electronics" },
  { id: 6, name: "Sneakers", price: 89.99, category: "Footwear" },
  { id: 7, name: "Blender", price: 34.99, category: "Kitchen" },
  { id: 8, name: "Resistance Bands", price: 15.0, category: "Sports" },
  { id: 9, name: "Laptop Stand", price: 29.99, category: "Electronics" },
  { id: 10, name: "Hiking Boots", price: 110.0, category: "Footwear" },
  { id: 11, name: "Air Fryer", price: 69.99, category: "Kitchen" },
  { id: 12, name: "Dumbbell Set", price: 55.0, category: "Sports" },
  {
    id: 13,
    name: "Noise-Cancelling Earbuds",
    price: 129.99,
    category: "Electronics",
  },
  { id: 14, name: "Sandals", price: 35.0, category: "Footwear" },
  { id: 15, name: "Toaster", price: 22.99, category: "Kitchen" },
  { id: 16, name: "Jump Rope", price: 10.0, category: "Sports" },
  { id: 17, name: "USB-C Hub", price: 44.99, category: "Electronics" },
  { id: 18, name: "Trail Runners", price: 95.0, category: "Footwear" },
  { id: 19, name: "Electric Kettle", price: 32.99, category: "Kitchen" },
  { id: 20, name: "Pull-up Bar", price: 28.0, category: "Sports" },
];

function searchAndFilter({
  query = "",
  minPrice,
  maxPrice,
  category,
  sortBy = "asc",
} = {}) {
  let results = [...products];

  // Search by name (case-insensitive)
  if (query) {
    const q = query.toLowerCase();
    results = results.filter((p) => p.name.toLowerCase().includes(q));
  }

  // Filter by price range
  if (minPrice !== undefined)
    results = results.filter((p) => p.price >= minPrice);
  if (maxPrice !== undefined)
    results = results.filter((p) => p.price <= maxPrice);

  // Filter by category
  if (category) {
    results = results.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }

  // Sort by price
  results.sort((a, b) =>
    sortBy === "desc" ? b.price - a.price : a.price - b.price,
  );

  return results;
}

console.log("\n=== Electronics under $50 sorted cheapest first ===");
console.log(
  searchAndFilter({ category: "Electronics", maxPrice: 50, sortBy: "asc" }),
);

console.log("\n=== Search 'shoes' ===");
console.log(searchAndFilter({ query: "shoes" }));

console.log("\n=== All products $25-$60, sorted expensive first ===");
console.log(searchAndFilter({ minPrice: 25, maxPrice: 60, sortBy: "desc" }));
