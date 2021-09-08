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
    expansionName : "Blocco di Spirale Temporale",
    expansionType : "Spirale Temporale",
    expansionBorderColor : "Black",
    expansionCardsNumber : 249,
  },
  
  cardNumber : 195,
  
  battlefieldAbilities : {
    enteringLifePointsEarned : 5,
    leavingTokenBeastValueCreated : 3,
    cit : "Always carry two spears."
  },
  
  illustratorInfo : {
    name : "Nils",
    lastName : "Hamm"
  },
  
  convertedManaCost : function(){
    return this.launchCost.commonMana + this.launchCost.greenMana;
  }
}

console.table(card);
console.log(card.convertedManaCost());


let text =
`<ul>
  <li> Name: ${card.name}</li>
  <li> Strength: ${card.strength}</li>
  <li> Constitution: ${card.constitution}</li>
  <h6>----------Mana Stats----------</h6>
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
  <h6>----------Expansion----------</h6>
  <li> Name: ${card.expansion.expansionName}</li>
  <li> Type: ${card.expansion.expansionType}</li>
  <li> Border Color: ${card.expansion.expansionBorderColor}</li>
  <li> Cards Number: ${card.expansion.expansionCardsNumber}</li>


</ul>`



document.getElementById("card").innerHTML = text;
