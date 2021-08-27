// Declaring a Map
const employees = new Map();

// Inserting a record in the Map
employees.set("Eddy", { designation: "Manager" });
employees.set("David", { designation: "Designer" });
employees.set("Alice", { designation: "Developer" });

// Verifying element in Map
console.log("Checking Eddy => ", employees.has("Eddy"));
console.log("Checking John => ", employees.has("John"));
