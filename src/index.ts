#!/usr/bin/env node

import * as fs from 'fs';
import * as yargs from 'yargs';
import { gitignoreTemplate, readmeTemplate, indexTemplate } from './templates/files';
import packageJsonTemplate from './templates/package.json';
import rollupTemplate from './templates/rollup';
import tsconfigTemplate from './templates/tsconfig';


const currentDir = process.cwd();

const createFolder = (folderName: string) => {
    const path = `${currentDir}/${folderName}`;
    
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
};

const createFile = (fileName: string, data: string) => {

    const path = `${currentDir}/${fileName}`;

    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, data);
    }
}

yargs.command({
    command: 'create',
    describe: 'Create a new library',
    builder: {
        name: {
            describe: 'Name of the library',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const folderName = argv.name;
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
    }
}).demandCommand(1)


yargs.parse();


