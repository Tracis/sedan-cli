"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _constants = require("./utils/constants");

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 主的流程控制
let apply = (action, ...args) => {
  //babel-env
  require(`./${action}`)(...args);
};
/**
 * sedan-cli commands
 *    - config
 *    - init
 */


let actionMap = {
  init: {
    description: "generate a new project from a template",
    usages: ["sedan-cli init templateName projectName"]
  },
  config: {
    alias: "cfg",
    description: "config .sedan-cli-rc",
    usages: ["sedan-cli config set <k> <v>", "sedan-cli config get <k>", "sedan-cli config remove <k>"] //other commands

  }
};
Object.keys(actionMap).forEach(action => {
  _commander.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias) //别名
  .action(() => {
    switch (action) {
      case "config":
        //配置
        apply(action, ...process.argv.slice(3));
        break;

      case "init":
        apply(action, ...process.argv.slice(3));
        break;

      default:
        break;
    }
  });
});

function help() {
  console.log("\r\nUsage:");
  Object.keys(actionMap).forEach(action => {
    actionMap[action].usages.forEach(usage => {
      console.log("  - " + usage);
    });
  });
  console.log("\r");
}

_commander.default.usage("<command> [options]");

_commander.default.on("-h", help);

_commander.default.on("--help", help);

_commander.default.version(_constants.VERSION, "-V --version").parse(process.argv); // sedan-cli 不带参数时


if (!process.argv.slice(2).length) {
  _commander.default.outputHelp(make_green);
}

function make_green(txt) {
  return _chalk.default.green(txt);
}