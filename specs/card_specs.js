const assert = require('assert');
const Card = require('../card.js');



describe("Card", function(){

  let card;

  beforeEach(function(){

    card = new Card("Superman", 6, 9,7);
  });

  it("should have a name", function(){

    const result = card.name;
    assert.strictEqual(result, "Superman");

  });
  it("should have strength", function(){

    const result = card.strength;
    assert.strictEqual(result, 9);

  });
  it("should have agility", function(){

    const result = card.agility;
    assert.strictEqual(result, 7);

  });
  it("should have intelligence", function(){

    const result = card.intelligence;
    assert.strictEqual(result, 6);

  });
















});
