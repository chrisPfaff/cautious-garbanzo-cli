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
program
    .command("words")
    .description("List number of words in a file")
    .argument("<file>", "file to count words")
    .action((filePath) => {
    fs_1.default.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log(chalk_1.default.red(`Error reading file: ${err.message}`));
            return;
        }
        else {
            const lines = data.split("\n");
            let count = 0;
            lines.forEach((line) => {
                count += line.split(" ").length;
            });
            console.log(chalk_1.default.greenBright(`Number of words in ${filePath}:`), chalk_1.default.underline(chalk_1.default.green(`${count}`)));
        }
    });
});
program
    .command("chars")
    .description("List number of characters in a file")
    .argument("<file>", "file to count chars")
    .action((filePath) => {
    fs_1.default.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log(chalk_1.default.red(`Error reading file: ${err.message}`));
            return;
        }
        else {
            const lines = data.split("\n");
            let count = 0;
            lines.forEach((line) => {
                let lineSplit = line.split("");
                count += lineSplit.length;
            });
            console.log(chalk_1.default.greenBright(`Number of words in ${filePath}:`), chalk_1.default.underline(chalk_1.default.green(`${count}`)));
        }
    });
});
program.parse(process.argv);
