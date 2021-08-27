// Declaring a Map
const employees = new Map();

// Inserting a record in the Map
employees.set("Eddy", { designation: "Manager" });
employees.set("David", { designation: "Designer" });
employees.set("Alice", { designation: "Developer" });

// Deleting the element from Map
console.log("Deleting Eddy => ", employees.delete("Eddy"));

console.log("Employees => ", employees);
