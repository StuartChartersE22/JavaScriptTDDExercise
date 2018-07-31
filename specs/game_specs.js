const assert = require('assert');
const Card = require('../card.js');
const Player = require('../player.js');
const Game = require('../game.js');

describe("Game", function(){
let game;
let player1;
let player2;
let card1;
let card2;
let card3;
let card4;
let cards1;
let cards2;
let players;

beforeEach(function(){
  card1 = new Card("Superman", 6, 9,7);
  card2 = new Card("Scarlet Witch", 7, 10,5);
  card3 = new Card("Black Widow", 8, 6, 9);
  card4 = new Card("Flash", 7,4,10);
  cards1= [card2,card3]
  cards2= [card1,card4];
  player1 = new Player("Can", cards1);
  player2 = new Player("Stuart", cards2);
  players= [player1, player2];
  game = new Game(players);
});

it("should have players", function () {
  assert.deepStrictEqual(game.players, players);
});

it("should let first player starts as declaring player", function () {
  assert.strictEqual(player1.isDeclaringPlayer, true);
});

it("should be able to play a round and the winner will be player 1 and get the cards", function () {
  game.playRound();
  game.playRound();
  assert.strictEqual(player1.cards.length, 2);
  assert.strictEqual(player2.cards.length, 2);
})




});
