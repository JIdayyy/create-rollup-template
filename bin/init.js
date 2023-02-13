"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require("chalk");
var figlet = require("figlet");
var init = function () {
    console.log(chalk(figlet.textSync("Create Rollup package", {
        font: "Star Wars",
        horizontalLayout: "full",
        verticalLayout: "universal smushing",
    })));
    console.log(chalk.green("Welcome to the Rollup package generator. This will help you create a new Rollup package."));
};
exports.default = init;
//# sourceMappingURL=init.js.map