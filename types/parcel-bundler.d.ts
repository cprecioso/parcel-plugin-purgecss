declare module "parcel-bundler/src/Asset" {
  class Asset {
    name: string
    options: { minify: boolean }
    getConfig(filenames: string[], { packageKey: string }): Promise<any>
    transform(): void
    parseIfNeeded(): Promise<void>
  }
  export = Asset
}

declare module "parcel-bundler/src/assets/CSSAsset" {
  import Asset = require("parcel-bundler/src/Asset")
  import postcss = require("postcss")

  class CSSAsset extends Asset {
    getCSSAst(): postcss.Result
    ast: { css: string; dirty: boolean }
  }
  export = CSSAsset
}
