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

export default tsconfigTemplate;