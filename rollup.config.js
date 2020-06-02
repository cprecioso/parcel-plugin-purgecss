import ts from "@wessberg/rollup-plugin-ts"

/** @type {import("rollup").RollupOptions} */
const options = {
  input: [
    require.resolve("./src/index.ts"),
    require.resolve("./src/packager.ts"),
  ],
  output: { dir: "lib", format: "cjs" },
  plugins: [ts({ typescript: require("typescript") })],
  external: (() => {
    const pkg = require("./package.json")
    const deps = [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ]
    return (id) => deps.includes(id.split("/")[0])
  })(),
}

export default options
