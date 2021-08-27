// Declaring a Map
const employees = new Map();

// Inserting a record in the Map
employees.set("Eddy", { designation: "Manager" });
employees.set("David", { designation: "Designer" });
employees.set("Alice", { designation: "Developer" });

// Getting the value of an element in Map
console.log("Getting the designation of Eddy => ", employees.get("Eddy"));
console.log("Getting the designation of David => ", employees.get("David"));
console.log("Getting the designation of Alice => ", employees.get("Alice"));
