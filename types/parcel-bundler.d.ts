declare module "parcel-bundler/src/Asset" {
  namespace Asset {
    interface Options {
      minify: boolean
      rootDir: string
    }
  }

  class Asset {
    options: Asset.Options
    load(): Promise<string>
  }

  export = Asset
}

declare module "parcel-bundler/src/assets/CSSAsset" {
  import Asset = require("parcel-bundler/src/Asset")
  class CSSAsset extends Asset {}
  export = CSSAsset
}
