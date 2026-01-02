import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/codpro-js.umd.js",
      format: "iife",
      name: "CodPro",
      exports: "named" 
    }
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/codpro-js.umd.min.js",
      format: "iife",
      name: "CodPro",
      plugins: [terser({ parallel: false })],
      exports: "named" 
    }
  }
];
