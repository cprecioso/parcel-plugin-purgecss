import Bundler from "parcel-bundler"

const plugin = (bundler: Bundler) => {
  bundler.addPackager("css", require.resolve("./packager"))
}

export default plugin as any
export type { PluginOptions } from "./types"
