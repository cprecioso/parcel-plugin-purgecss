type Bundler = import("parcel-bundler")

const plugin = (bundler: Bundler) => {
  bundler.addPackager("css", require.resolve("./packager"))
}

export = plugin
