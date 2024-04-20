#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils/utils");
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const program = new commander_1.Command();
program
    .name("cg-file-utility")
    .description("CLI For File Utilities")
    .version("0.0.1");
program
    .command("lines")
    .description("List number of lines in a file")
    .argument("<file>", "file to count lines")
    .action(async (filePath) => {
    const data = await (0, utils_1.readFile)(filePath);
    if (data === null) {
        console.log(chalk_1.default.red(`Error reading file: ${filePath}`));
        return;
    }
    else {
        const lines = (0, utils_1.splitLines)(data);
        console.log(chalk_1.default.greenBright(`Number of lines in ${filePath}:`), chalk_1.default.underline(chalk_1.default.green(`${lines.length}`)));
    }
});
program
    .command("words")
    .description("List number of words in a file")
    .argument("<file>", "file to count words")
    .action(async (filePath) => {
    const data = await (0, utils_1.readFile)(filePath);
    if (data === null) {
        console.log(chalk_1.default.red(`Error reading file: ${filePath}`));
        return;
    }
    else {
        const lines = (0, utils_1.splitLines)(data);
        let count = 0;
        lines.forEach((line) => {
            count += line.split(" ").length;
        });
        console.log(chalk_1.default.greenBright(`Number of words in ${filePath}:`), chalk_1.default.underline(chalk_1.default.green(`${count}`)));
    }
});
program
    .command("chars")
    .description("List number of characters in a file")
    .argument("<file>", "file to count chars")
    .action(async (filePath) => {
    const data = await (0, utils_1.readFile)(filePath);
    let count = 0;
    if (data === null) {
        console.log(chalk_1.default.red(`Error reading file: ${filePath}`));
        return;
    }
    else {
        const lines = (0, utils_1.splitLines)(data);
        lines.forEach((line) => {
            count += line.length;
        });
        console.log(chalk_1.default.greenBright(`Number of characters in ${filePath}:`), chalk_1.default.underline(chalk_1.default.green(`${data.length}`)));
    }
});
program.parse(process.argv);
