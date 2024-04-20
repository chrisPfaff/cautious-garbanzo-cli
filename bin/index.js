#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const program = new commander_1.Command();
program
    .name("cg-file-utility")
    .description("CLI For File Utilities")
    .version("0.0.1");
program
    .command("lines")
    .description("List number of lines in a file")
    .argument("<file>", "file to count lines")
    .action((filePath) => {
    fs_1.default.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log(chalk_1.default.red(`Error reading file: ${err.message}`));
            return;
        }
        else {
            const lines = data.split("\n").length;
            console.log(chalk_1.default.greenBright(`Number of lines in ${filePath}:`), chalk_1.default.underline(chalk_1.default.green(`${lines}`)));
        }
    });
});
program.parse(process.argv);