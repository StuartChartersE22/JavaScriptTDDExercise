const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe("Player", function(){
let player;
let card1;
let card2;
let card3;
let card4;

beforeEach(function(){
  card1 = new Card("Superman", 6, 9,7);
  card2 = new Card("Scarlet Witch", 7, 10,5);
  card3 = new Card("Black Widow", 8, 6, 9);
  card4 = new Card("Flash", 7,4,10);

  player = new Player()


});


});
