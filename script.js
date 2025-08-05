const Car = {
    brand : "BMW",
    model : "X5",
    year : 2023,
    hasSunroof : true
}

Car.model = "X3"; //OR Car["model"] = "X3";
Car.color = "Yellow"; //OR Car["color"] = "Yellow";

for (let key in Car) {
    console.log(Car[key])
}
