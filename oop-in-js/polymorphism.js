class Animal {
  makesSound() {
    console.log('Animal makes sound');
  }
}

class Duck extends Animal {
  makesSound() {
    console.log('Quack Quack');
  }
}

class Cat extends Animal {
  makesSound() {
    console.log('meow meow');
  }
}

const cat = new Cat();
cat.makesSound(); // meow meow

const duck = new Duck();
duck.makesSound(); // Quack Quack
