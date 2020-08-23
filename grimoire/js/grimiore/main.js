function main() {
  // Put your code here
  console.log("Do you believe in magic?")
  console.log("------------------------")

  class SpellBook {
    constructor(Title, Spells) {
      this.Title = Title,
        this.Spells = Spells
    }
  }

  class Spell {
    constructor(Name, IsEvil, EnergyRequired) {
      this.Name = Name,
        this.IsEvil = IsEvil,
        this.EnergyRequired = EnergyRequired
    }
  }

  const GetAllSpells = () => {
    const allSpells = [
      new Spell("Turn enemy into a newt", true, 5.1),
      new Spell("Conjure some gold for a local charity", false, 2.99),
      new Spell("Give a deaf person the ability to heal", false, 12.2),
      new Spell("Make yourself emperor of the universe", true, 100.0),
      new Spell("Convince your relatives your political views are correct", false, 2921.5)
    ]

    return allSpells
  }

  const DisplaySpellBook = (book) => {
    console.log(book.Title)
    book.Spells.forEach(spell => console.log(spell.Name))
  }

  const MakeEvilSpellBook = (allSpells) => {
    const evilBook = new SpellBook()
    evilBook.Title = "Evil Book"
    evilBook.Spells = allSpells.filter(spell => spell.IsEvil)

    return evilBook
  }

  const MakeGoodSpellBook = (allSpells) => {
    const goodBook = new SpellBook()
    goodBook.Title = "Good Book"
    goodBook.Spells = allSpells.filter(spell => !spell.IsEvil)

    return goodBook
  }

  const allSpells = GetAllSpells()
  const goodBook = MakeGoodSpellBook(allSpells)
  const evilBook = MakeEvilSpellBook(allSpells)

  DisplaySpellBook(goodBook)
  console.log()
  DisplaySpellBook(evilBook)
}

main();