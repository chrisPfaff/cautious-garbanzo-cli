#! /usr/bin/env node

import fs, { read } from "fs";
import { readFile, splitLines } from "./utils/utils";

import { Command } from "commander";
import chalk from "chalk";
import path from "path";

const program = new Command();

program
  .name("cg-file-utility")
  .description("CLI For File Utilities")
  .version("0.0.1");

program
  .command("lines")
  .description("List number of lines in a file")
  .argument("<file>", "file to count lines")
  .action(async (filePath: string) => {
    const data = await readFile(filePath);
    if (data === null) {
      console.log(chalk.red(`Error reading file: ${filePath}`));
      return;
    } else {
      const lines = splitLines(data);
      console.log(
        chalk.greenBright(`Number of lines in ${filePath}:`),
        chalk.underline(chalk.green(`${lines.length}`))
      );
    }
  });

program
  .command("words")
  .description("List number of words in a file")
  .argument("<file>", "file to count words")
  .action(async (filePath: string) => {
    const data = await readFile(filePath);
    if (data === null) {
      console.log(chalk.red(`Error reading file: ${filePath}`));
      return;
    } else {
      const lines = splitLines(data);
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

program
  .command("chars")
  .description("List number of characters in a file")
  .argument("<file>", "file to count chars")
  .action(async (filePath: string) => {
    const data = await readFile(filePath);
    let count = 0;
    if (data === null) {
      console.log(chalk.red(`Error reading file: ${filePath}`));
      return;
    } else {
      const lines = splitLines(data);
      lines.forEach((line) => {
        count += line.length;
      });
      console.log(
        chalk.greenBright(`Number of characters in ${filePath}:`),
        chalk.underline(chalk.green(`${data.length}`))
      );
    }
  });

program.parse(process.argv);
