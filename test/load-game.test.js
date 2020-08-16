const { Game } = require("blackjack-core");
const { expect } = require("chai");

describe("Try to load blackjack-core", () => {
  it("init game", () => {
    const game = new Game();
    expect(game.constructor.name).to.eql("Game");
  });
});
