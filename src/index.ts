const plugin = bundler => {
  bundler.addAssetType("css", require.resolve("./asset"))
}
export = plugin
