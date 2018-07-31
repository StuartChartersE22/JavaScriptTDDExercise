const Game = function (players) {
  this.players = players;
  players[0].isDeclaringPlayer = true;
}

Game.prototype.isCard1Greater = function (category, card1, card2) {
  return card1[category] > card2[category];
};

Game.prototype.createRound = function () {
  let round = {};
  for(let player of this.players){
    round[player.id] = player.drawCard();
  }
  return round;
};

Game.prototype.findCategory = function (round) {
  for(let player of this.players){
    if(player.isDeclaringPlayer){
      const card = round[player.id];
      return player.selectCategory(card);
    }
  }
};

Game.prototype.findDeclaringPlayer = function () {
  for(let player of this.players){
    if(player.isDeclaringPlayer){
      return player;
    }
  }
};

Game.prototype.findPlayerById = function (id) {
  for(let player of this.players){

    if(player.id == id){
      return player;
    }
  }
};

Game.prototype.playRound = function () {
  let round = this.createRound();
  let category = this.findCategory(round);

  const declaringPlayer = this.findDeclaringPlayer();
  declaringPlayer.isDeclaringPlayer = false;
  let winnerId = declaringPlayer.id;

  for(let playerId in round){

    if(round[playerId][category] > round[winnerId][category]){
      winnerId = playerId;
    }
  }

  winner = this.findPlayerById(winnerId)
  winner.isDeclaringPlayer = true;
  winner.addCardsToDeck(Object.values(round));
  return winner;

  // this.findPlayerById(winnerId).addCardsToDeck(Object.values(round));
  // this.findPlayerById(winnerId).isDeclaringPlayer = true;

  // card1 = this.players[0].drawCard();
  // card2 = this.players[1].drawCard();
  //
  // if(this.players[0].isDeclaringPlayer){
  //   category = this.players[0].selectCategory(card1);
  // }else{
  //   category = this.players[1].selectCategory(card2);
  // }
  //
  // if(this.isCard1Greater(category, card1, card2)){
  //   this.players[0].addCardToDeck(card1);
  //   this.players[0].addCardToDeck(card2);
  //   this.players[0].isDeclaringPlayer = true;
  //   this.players[1].isDeclaringPlayer = false;
  // }else{
  //   this.players[1].addCardToDeck(card1);
  //   this.players[1].addCardToDeck(card2);
  //   this.players[1].isDeclaringPlayer = true;
  //   this.players[0].isDeclaringPlayer = false;
  // }
};

module.exports = Game;
