function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!")

  console.log("---------------------------")

  class Die {
    constructor(value) {
      this.value = value
    }

    convertToString() {
      dieString = "Unknown"

      switch (this.value) {
        case 1:
          dieString = "\u2680";
          break;
        case 2:
          dieString = "\u2681";
          break;
        case 3:
          dieString = "\u2682";
          break;
        case 4:
          dieString = "\u2683";
          break;
        case 5:
          dieString = "\u2684";
          break;
        case 6:
          dieString = "\u2685";
          break;
      }

      return dieString;
    }
  }

  const roll = () => {
    const dieValue = Math.floor(Math.random() * 7)
    const die = new Die(dieValue)
    return die
  }

  for (let i = 0; i < 10; i++) {
    const die1 = roll()
    const die2 = roll()

    let message = `${die1} + ${die2} == ${die1.value + die2.value}`
    if (die1.value === die2.value) {
      message += " Doubles!"
    }

    console.log(message)
  }
}

main();