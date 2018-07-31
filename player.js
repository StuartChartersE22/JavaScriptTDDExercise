const Player = function(name, cards) {
  this.name = name;
  this.cards = cards;
}
module.exports = Player;



Player.prototype.drawCard = function () {
  return this.cards.shift();

};
