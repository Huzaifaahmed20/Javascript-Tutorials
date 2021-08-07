class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getAge() {
    return `User age is ${this.age}`;
  }
}

class Developer extends User {
  constructor(name, email, age, skills) {
    super(name, email, age);
    this.skills = skills;
  }
}

const developer = new Developer('Ali', 'ali@gmail.com', 22, [
  'html',
  'css',
  'js',
]);

console.log(developer.getAge()); //User age is 22
console.log(developer.skills); //['html','css','js']
