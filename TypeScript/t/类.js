var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal("Jack");
console.log(a.name); // Jack
a.name = "Tom";
console.log(a.name); // Tom
// private
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal("Jack");
console.log(a.name); // Jack
a.name = "Tom";
