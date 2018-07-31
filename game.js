const Game = function (players) {
  this.players = players;
  players[0].isDeclaringPlayer = true;
}

Game.prototype.isCard1Greater = function (category, card1, card2) {
  console.log(card1, card2, category);
  return card1[category] > card2[category];
};

Game.prototype.playRound = function () {
  let category;

  card1 = this.players[0].drawCard();
  card2 = this.players[1].drawCard();

  if(this.players[0].isDeclaringPlayer){
    category = this.players[0].selectCategory(card1);
  }else{
    category = this.players[1].selectCategory(card2);
  }

  if(this.isCard1Greater(category, card1, card2)){
    this.players[0].giveCard(card1);
    this.players[0].giveCard(card2);
    this.players[0].isDeclaringPlayer = true;
    this.players[1].isDeclaringPlayer = false;
  }else{
    this.players[1].giveCard(card1);
    this.players[1].giveCard(card2);
    this.players[1].isDeclaringPlayer = true;
    this.players[0].isDeclaringPlayer = false;
  }
};

module.exports = Game;
