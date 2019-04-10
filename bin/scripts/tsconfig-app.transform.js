#!/usr/bin/env node

const editJsonFile = require("edit-json-file");

const args = process.argv.slice(2);

const filePath = args[0];
let file = editJsonFile(filePath);

const typesPath = 'compilerOptions.types';

file.set(typesPath, [...file.get(typesPath), 'node']);
file.save();