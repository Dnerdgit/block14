const cars = ["Honda", "Toyota", "Ford", "Subarru"];

/*["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"]*/ 

cars.push("Hyundai")

/*["Hyundai", "Toyota", "Mercedes", "Ford", "Audi"]*/ 

cars.unshift("Hyundai");
cars.pop();
cars.splice(3, 1, "Audi");
console.log(cars);