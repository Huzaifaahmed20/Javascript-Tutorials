class User {
  constructor(nema, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getAge() {
    return `User age is ${this.age}`;
  }
}

const user1 = new User('Huzaifa', 'huzaifa@gmail.com', 24);
const user2 = new User('ali', 'ali@gmail.com', 22);

console.log(user1.getAge()); // User age is 24
console.log(user2.getAge()); // User age is 22
