const Game = function (players) {
  this.players = players;
  players[0].isDeclaringPlayer = true;
}

Game.prototype.isCard1Greater = function (category, card1, card2) {
  return card1[category] > card2[category];
};

Game.prototype.createRound = function () {
  let round = new Map();
  for(let player of this.players){
    round.set(player, player.drawCard());
  }
  return round;
};

Game.prototype.findCategory = function (round) {
  for(let player of this.players){
    if(player.isDeclaringPlayer){
      const card = round.get(player);
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

  let winner = declaringPlayer;
  round.forEach((card, person) => {
    if(card[category] > round.get(winner)[category]){
      winner = person;
    }
  });

  winner.isDeclaringPlayer = true;
  winner.addCardsToDeck(Array.from(round.values()));
  this.removeLosers();
  return winner;
};

module.exports = Game;
