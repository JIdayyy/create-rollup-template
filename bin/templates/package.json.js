"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var packageJsonTemplate = "\n{\n    \"name\": \"my-lib\",\n    \"version\": \"1.0.0\",\n    \"main\": \"dist/index.js\",\n    \"module\": \"dist/index.es.js\",\n    \"types\": \"dist/index.d.ts\",\n    \"scripts\": {\n        \"build\": \"rollup -c\"\n    },\n    \"devDependencies\": {\n        \"rollup\": \"^1.20.3\",\n        \"rollup-plugin-commonjs\": \"^10.0.1\",\n        \"rollup-plugin-node-resolve\": \"^5.2.0\",\n        \"rollup-plugin-typescript2\": \"^0.25.2\",\n        \"typescript\": \"^3.7.2\"\n    }\n}\n";
exports.default = packageJsonTemplate;
//# sourceMappingURL=package.json.js.map