

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

export default packageJsonTemplate;