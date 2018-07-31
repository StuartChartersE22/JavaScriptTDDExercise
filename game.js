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

Game.prototype.removeLosers = function () {
  for(i=0; i<this.players.length; i++){
    if(this.players[i].cards.length === 0){
      this.players.splice(i, 1);
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
  this.removeLosers();
  return winner;
};

module.exports = Game;
