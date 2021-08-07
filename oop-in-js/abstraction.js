class User {
  constructor(name, email, age) {
    this._name = name;
    this._email = email;
    this._age = age;
    this._skills = [];
  }

  learnSkill(skill) {
    this._skills.push(skill);
  }

  isEligibleForVote() {
    return this._age >= 18;
  }
}

const user = new User('Huzaifa', 'huzaifa@gmail.com', 24);

user.learnSkill('react');
user.learnSkill('javascript');

console.log(user._skills); // ['react', 'javascript']
console.log(user.isEligibleForVote()); // true
