const { program } = require("commander");
const package = require("../package.json");
const { Game } = require("blackjack-core");

program.command("version").action(() => {
  console.log(package.version);
});

program.command("start").action(() => {
  console.log("Blackjack");

  const game = new Game();

  console.log(game);
});

program.parse(process.argv);
