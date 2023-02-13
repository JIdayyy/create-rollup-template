#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const yargs = require("yargs");
const currentDir = process.cwd();
const createFolder = (folderName) => {
    const path = `${currentDir}/${folderName}`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
};
const createFile = (fileName, data) => {
    const path = `${currentDir}/${fileName}`;
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, data);
    }
};
const rollupTemplate = `
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
    ],
};
`;
const tsconfigTemplate = `
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "declaration": true,
        "declarationMap": true,
        "sourceMap": true,
        "outDir": "dist",
        "rootDir": "src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "noEmit": true
    },
    "include": ["src"],
    "exclude": ["node_modules"]
}
`;
const packageJsonTemplate = `
{
    "name": "my-lib",
    "version": "1.0.0",
    "main": "dist/index.js",
    "module": "dist/index.es.js",
    "types": "dist/index.d.ts",
    "scripts": {
        "build": "rollup -c"
    },
    "devDependencies": {
        "rollup": "^1.20.3",
        "rollup-plugin-commonjs": "^10.0.1",
        "rollup-plugin-node-resolve": "^5.2.0",
        "rollup-plugin-typescript2": "^0.25.2",
        "typescript": "^3.7.2"
    }
}
`;
const indexTemplate = `
export const myLib = () => 'myLib';
`;
const gitignoreTemplate = `
node_modules
dist
`;
const readmeTemplate = `
# my-lib
`;
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
}).demandCommand(1);
yargs.parse();
//# sourceMappingURL=index.js.map