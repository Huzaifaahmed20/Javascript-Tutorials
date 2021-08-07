class User {
  constructor(name, email, age) {
    this._name = name;
    this._email = email;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  getAge() {
    return `User age is ${this.age}`;
  }
}

const user = new User('Huzaifa', 'huzaifa@gmail.com', 24);

console.log(user.name); // Huzaifa

user.name = 'Ali';

console.log(user.name); // Ali
