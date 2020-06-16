interface Person {
  name: string;
  age: number;
  sex: string;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  sex: "woman",
};
interface Person2 {
  name: string;
  age: number;
  sex?: string;
  readonly id?: number;
}

let tom2: Person2 = {
  name: "zhangsan",
  age: 18,
  id: 20200616,
};
tom2.id = 110;
