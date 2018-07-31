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
  card5 = new Card("Wonder Woman", 8,7,5);
  card6 = new Card("Batman", 10,5,6);
  cards1= [card1,card4];
  cards2= [card2,card3];
  cards3= [card5,card6];
  player1 = new Player("Can", cards1);
  player2 = new Player("Stuart", cards2);
  player3 = new Player("Bob", cards3);
  players= [player1, player2, player3];
  game = new Game(players);
});

it("should have players", function () {
  assert.deepStrictEqual(game.players, players);
});

it("should let first player starts as declaring player", function () {
  assert.strictEqual(player1.isDeclaringPlayer, true);
});

it("should be able to find a winner", function () {
  let winner = game.playRound();
  assert.deepStrictEqual(winner, player2);
  assert.strictEqual(player2.cards.length, 4);
  assert.strictEqual(player1.cards.length, 1);
  assert.strictEqual(player1.isDeclaringPlayer, false);
  assert.strictEqual(player2.isDeclaringPlayer, true);
});

it("can remove losers from game", function () {
  game.playRound();
  game.playRound();
  assert.deepStrictEqual(game.players, [player1, player2]);
});

});
