class Sandwich {
  #bun;
  #cheese;
  #meat;
  #vegetables;
  constructor(bun, cheese, meat, vegetables) {
    this.#bun = bun;
    this.#cheese = cheese;
    this.#meat = meat;
    this.#vegetables = vegetables;
  }

  get bun() {
    return this.#bun;
  }
  get cheese() {
    return this.#cheese;
  }
  get meat() {
    return this.#meat;
  }
  get vegetables() {
    return this.#vegetables;
  }

  showInfo() {
    const bun = this.#bun[0];
    const cheese = this.#cheese[0];
    const meat = this.#meat.slice(0, -5);
    let vegetables = "";

    if (this.#vegetables.length == 2 && this.#vegetables[0] != "object") {
      vegetables = this.#vegetables[0];
    } else {
      const arr = [];
      for (let index = 0; index < this.#vegetables.length; index++) {
        arr.push(this.#vegetables[index][0]);
      }
      vegetables = arr.join(", ");
    }

    console.log(
      `\nYour sandwich: \nBun - ${bun}\nCheese - ${cheese}\nMeat - ${meat}\nVegetables - ${vegetables}`
    );
  }
}
module.exports = Sandwich;
