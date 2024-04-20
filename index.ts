#! /usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import fs from "fs";
const program = new Command();

program
  .name("cg-file-utility")
  .description("CLI For File Utilities")
  .version("0.0.1");

program
  .command("lines")
  .description("List number of lines in a file")
  .argument("<file>", "file to count lines")
  .action((filePath: string) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(chalk.red(`Error reading file: ${err.message}`));
        return;
      } else {
        const lines = data.split("\n").length;
        console.log(
          chalk.greenBright(`Number of lines in ${filePath}:`),
          chalk.underline(chalk.green(`${lines}`))
        );
      }
    });
  });

program
  .command("words")
  .description("List number of words in a file")
  .argument("<file>", "file to count words")
  .action((filePath: string) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(chalk.red(`Error reading file: ${err.message}`));
        return;
      } else {
        const lines = data.split("\n");
        let count = 0;
        lines.forEach((line) => {
          count += line.split(" ").length;
        });
        console.log(
          chalk.greenBright(`Number of words in ${filePath}:`),
          chalk.underline(chalk.green(`${count}`))
        );
      }
    });
  });

program
  .command("chars")
  .description("List number of characters in a file")
  .argument("<file>", "file to count chars")
  .action((filePath: string) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(chalk.red(`Error reading file: ${err.message}`));
        return;
      } else {
        const lines = data.split("\n");
        let count = 0;
        lines.forEach((line) => {
          let lineSplit = line.split("");
          count += lineSplit.length;
        });
        console.log(
          chalk.greenBright(`Number of words in ${filePath}:`),
          chalk.underline(chalk.green(`${count}`))
        );
      }
    });
  });

program.parse(process.argv);
