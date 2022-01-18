// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage
  }

  
}

// Viking
class Viking extends Soldier {

constructor(name,health, strength){
  super(health, strength)
  this.name = name
}


receiveDamage(damage){
  this.health -= damage

  if(this.health > 0){
    return `${this.name} has received ${damage} points of damage`
  } else if(this.health <= 0){
    return `${this.name} has died in act of combat`
  }
 
}

battleCry(){
  return "Odin Owns You All!"

}

}

// Saxon
class Saxon extends Soldier{

  constructor(health, strength){
    super(health, strength)
  }

  receiveDamage(damage){
    this.health -= damage
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else if(this.health <= 0){
      return "A Saxon has died in combat"
    }
  }

}

// War
class War {

    vikingArmy = []
    saxonArmy = []

 /*  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];

  } */

  addViking(viking){
    this.viking.push(viking);
  }

  addSaxon(saxon){
    this.saxon.push(saxon);
  }

  //instanceof

  vikingAttack(){

    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    let randomViking = Math.floor(Math.random()*this.vikingArmy.length)

    let fightResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
      if(this.saxonArmy[randomSaxon].health <= 0){
        this.saxonArmy.splice(randomSaxon, 1)
      }

      return fightResult;
  }

  saxonAttack(){

    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    let randomViking = Math.floor(Math.random()*this.vikingArmy.length)

    let fightResult = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())

      if(this.vikingArmy[randomViking].health <= 0){
        this.vikingArmy,splice(randomViking, 1)
      }

      return fightResult

  }

  showStatus(){
      let status = "";

      if(this.saxonArmy.length === 0){
        status = "Vikings have won the war of the century!"
      } else if(this.vikingArmy.length === 0){
        status = "Saxons have fought for their lives and survived another day..."
      } else if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 0){
        status = "Vikings and Saxons are still in the thick of battle."
      }

      return status
  }


}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
