function vehicle(name, maker, year) {
  this.name = name;
  this.maker = maker;
  this.year = year;
}
let car = new vehicle("chal", "BMW", 2001);
console.log(car.name);
