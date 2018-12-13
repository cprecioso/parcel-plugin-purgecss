import { Plugin } from "parcel-bundler"

export = (bundler => {
  bundler.addAssetType("css", require.resolve("./asset"))
}) as Plugin
