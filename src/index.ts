#!/usr/bin/env node

import { command, parse } from "yargs";
import { prompt as inquirerPrompt } from "inquirer";
import { exec } from "child_process";
import {
  gitignoreTemplate,
  readmeTemplate,
  indexTemplate,
} from "./templates/files";
import packageJsonTemplate from "./templates/package.json";
import rollupTemplate from "./templates/rollup";
import tsconfigTemplate from "./templates/tsconfig";
import prompt from "./inquirer";
import { existsSync, mkdirSync, writeFileSync } from "fs";

const currentDir = process.cwd();

const createFolder = (folderName: string) => {
  const path = `${currentDir}/${folderName}`;

  if (!existsSync(path)) {
    mkdirSync(path);
  }
};

const createFile = (fileName: string, data: string) => {
  const path = `${currentDir}/${fileName}`;

  if (!existsSync(path)) {
    writeFileSync(path, data);
  }
};

const createLib = async () => {
  const res = await prompt("What is the name of your library?");
  command({
    command: "create",
    describe: "Create a new library",
    handler: (argv) => {
      const folderName = res.name;
      createFolder(folderName);
      createFolder(`${folderName}/src`);

      process.chdir(folderName);

      createFile(`${folderName}/rollup.config.js`, rollupTemplate);
      createFile(`${folderName}/tsconfig.json`, tsconfigTemplate);
      createFile(`${folderName}/package.json`, packageJsonTemplate);
      createFile(`${folderName}/.gitignore`, gitignoreTemplate);
      createFile(`${folderName}/README.md`, readmeTemplate);
      createFile(`${folderName}/src/index.ts`, indexTemplate);

      console.log(`Rollup template ${folderName} created!`);
    },
  });

  parse();

  return res.name;
};

const installDependencies = async (name: string) => {
  const res = await inquirerPrompt([
    {
      type: "list",
      name: "name",
      message: "Do you want to install dependencies?",
      choices: ["yes", "no"],
    },
  ]);

  if (res.name === "no") {
    console.log("Dependencies not installed!");
    console.log("cd " + name);
    console.log("npm install");
  }

  if (res.name === "yes") {
    console.log("Installing dependencies...");

    exec("npm install", (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });

    console.log("Dependencies installed!");

    console.log("Building library...");
  }
};

createLib().then((name) => {
  installDependencies(name);
});
