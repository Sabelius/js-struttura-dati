const card = {
  name : "Thragtusk",
  strength : 5,
  constitution : 3,
  
  launchCost : { 
    commonMana : 4,
    whiteMana : 0,
    blueMana : 0,
    blackMana : 0,
    redMana : 0,
    greenMana : 1
  },

  cardTypeDescription : { 
    type : "Creature",
    race : "Beast"
  },

  expansion : { 
    expansionName : "ArchEnemy: Nicol Bolas",
    expansionType : "Rare",
    expansionBorderColor : "Black",
    expansionCardsNumber : 106,
  },
  
  cardNumber : 075,
  
  battlefieldAbilities : {
    enteringLifePointsEarned : 5,
    leavingTokenBeastValueCreated : 3,
  },

  flavorText : "Always carry two spears.",
  
  illustratorInfo : {
    name : "Nils",
    lastName : "Hamm"
  },

  tokenBeastNumber : function(){
    return this.battlefieldAbilities.leavingTokenBeastValueCreated + "/" + this.battlefieldAbilities.leavingTokenBeastValueCreated;
  },

  convertedManaCost : function(){
    return this.launchCost.commonMana + this.launchCost.greenMana;
  }
}

console.table(card);

let text =
`<ul>
  <h6>---------------General Info---------------</h6>
  <li> Name: ${card.name}</li>
  <li> Strength: ${card.strength}</li>
  <li> Constitution: ${card.constitution}</li>
  <h6>----------------Mana Stats----------------</h6>
  <li> Common Mana: ${card.launchCost.commonMana}</li>
  <li> White Mana: ${card.launchCost.whiteMana}</li>
  <li> Blue Mana: ${card.launchCost.blueMana}</li>
  <li> Black Mana: ${card.launchCost.blackMana}</li>
  <li> Red Mana: ${card.launchCost.redMana}</li>
  <li> Green Mana: ${card.launchCost.greenMana}</li>
  <h6>----------Converted Mana Costs----------</h6>
  <li> CMC: ${card.convertedManaCost()}</li>
  <h6>----------Card Type Description----------</h6>
  <li> Type: ${card.cardTypeDescription.type}</li>
  <li> Race: ${card.cardTypeDescription.race}</li>
  <h6>-----------------Expansion-----------------</h6>
  <li> Name: ${card.expansion.expansionName}</li>
  <li> Type: ${card.expansion.expansionType}</li>
  <li> Border Color: ${card.expansion.expansionBorderColor}</li>
  <li> Cards Number: ${card.expansion.expansionCardsNumber}</li>
  <h6>-------------Collection Number-------------</h6>
  <li> Current Card Number: ${card.cardNumber}</li>
  <h6>-------------------Abilities-------------------</h6>
  <li> Life Points Gained Once The Card is Deployed On The Battlefield: ${card.battlefieldAbilities.enteringLifePointsEarned}</li>
  <li> Green Beast Token put Onto The Battlefield Once The Card Is Withdrawn: ${card.tokenBeastNumber()}</li>
  <h6>------------------Flavor Text------------------</h6>
  <em> ${card.flavorText}</em>
  <h6>----------------Illustrator Info----------------</h6>
  <li> Name: ${card.illustratorInfo.name}</li>
  <li> Last Name: ${card.illustratorInfo.lastName}</li>
  <h6>------------------Card Image------------------</h6>
  <img src="img/thragtusk.png" alt="cardimage">
</ul>`;



document.getElementById("card").innerHTML = text;
