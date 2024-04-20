"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitLines = exports.readFile = void 0;
const fs_1 = __importDefault(require("fs"));
const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
exports.readFile = readFile;
const splitLines = (data) => {
    return data.split("\n");
};
exports.splitLines = splitLines;
