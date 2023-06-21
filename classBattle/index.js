const clc = require("cli-color");

class Character {

  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  printHealth() {
    console.log(clc.green(`${this.name} Health: ${this.health}`))
  }



  isAlive() {
    return (this.health >= 0) ? true : false;
  }

  charge(opponent) {
    console.log(clc.red(`${this.name} charges ${opponent.name}`));

    opponent.health -= this.attack;
  }


  slam(opponent) {
    console.log(clc.blue(`${this.name} slams ${opponent.name}`));
    let randomPower = Math.floor(Math.random() * 10)
    opponent.health -= (randomPower * this.attack);
  }





}

console.log(clc.red("I hope everyone enjoyed me presenting" + clc.blue(" about spongy, crabby and planky")))

const notice = clc.yellow;
console.log(notice("Warning!"))

let spongy = new Character("Spongy", 12000, 150); // main character
let crabby = new Character("Crabby", 5500, 250); // first level boss
let planky = new Character("Planky", 200, 1200);

// spongy.printHealth();
// crabby.printHealth();

// set up a turn variable
let spongyTurn = true;

// console.log(spongy.isAlive())

// what we run for them to battle
// const turnInterval = setInterval(() => {

//   if (!spongy.isAlive() || !crabby.isAlive()) {
//     clearInterval(turnInterval);
//     console.log("next fight!")
//   } else if (spongyTurn) {


//     spongy.slam(crabby); // our main character here
//     // print health to terminal
//     crabby.printHealth();
//     spongy.printHealth();

//   } else {
//     crabby.slam(spongy);

//     // print health to terminal
//     crabby.printHealth();
//     spongy.printHealth();
//   }

//   spongyTurn = !spongyTurn;

// }, 500)
