class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal("Jack");
console.log(a.name); // Jack
a.name = "Tom";
console.log(a.name); // Tom
// private
class Animal1 {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

let a1 = new Animal1("Jack");
console.log(a1.name); // Jack
a1.name = "Tom";
