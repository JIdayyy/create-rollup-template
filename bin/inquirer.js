"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var init_1 = require("./init");
var prompt = function (question) {
    (0, init_1.default)();
    return (0, inquirer_1.prompt)([
        {
            type: "input",
            name: "name",
            message: "What is the name of your library?",
        },
    ]);
};
exports.default = prompt;
//# sourceMappingURL=inquirer.js.map