const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe("Player", function(){
let player;
let card1;
let card2;
let card3;
let card4;
let cards;
beforeEach(function(){
  card1 = new Card("Superman", 6, 9,7);
  card2 = new Card("Scarlet Witch", 7, 10,5);
  card3 = new Card("Black Widow", 8, 6, 9);
  card4 = new Card("Flash", 7,4,10);
  cards= [card1,card2,card3,card4];
  player = new Player("Can", cards);

});

it("should have a name", function(){
  const result = player.name;
  assert.strictEqual(result, "Can");
});

it("should have cards", function(){
  const result = player.cards;
  assert.deepStrictEqual(result, cards);
});

it("can draw a card", function(){
const result = player.drawCard();
assert.deepStrictEqual(result, card1);
});

it("can choose the highest category", function(){
const drawnCard = player.drawCard()
const result = player.selectCategory(drawnCard);
assert.strictEqual(result, "strength");

});

});
