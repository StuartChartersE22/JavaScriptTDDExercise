const Player = function(name, cards) {
  this.name = name;
  this.cards = cards;
  this.isDeclaringPlayer =false;
}
module.exports = Player;



Player.prototype.drawCard = function () {
  return this.cards.shift();

};

Player.prototype.selectCategory = function (card) {
  let selectedCategory;
  let highest=0;
  for (let property in card){
    if(property!=="name"){
      if (card[property]>highest){
      highest=card[property];
      selectedCategory=property;
    }
    }
  }
  return selectedCategory;
};

Player.prototype.addCardToDeck = function (card) {
  this.cards.push(card);
};

Player.prototype.addCardsToDeck = function (cards) {
  this.cards = this.cards.concat(cards);
};
