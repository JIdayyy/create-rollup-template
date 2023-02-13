"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rollupTemplate = "\nimport typescript from 'rollup-plugin-typescript2';\nimport commonjs from 'rollup-plugin-commonjs';\nimport resolve from 'rollup-plugin-node-resolve';\nimport pkg from './package.json';\n\nexport default {\n    input: 'src/index.ts',\n    output: [\n        {\n            file: pkg.main,\n            format: 'cjs',\n            sourcemap: true,\n        },\n        {\n            file: pkg.module,\n            format: 'es',\n            sourcemap: true,\n        },\n    ],\n    plugins: [\n        resolve(),\n        commonjs(),\n        typescript({ useTsconfigDeclarationDir: true }),\n    ],\n};\n";
exports.default = rollupTemplate;
//# sourceMappingURL=rollup.js.map