import CSSPackager = require("parcel-bundler/src/packagers/CSSPackager")
import CSSAsset = require("parcel-bundler/src/assets/CSSAsset")
import PurgeCSS = require("purgecss")

class PurgeCSSPackager extends CSSPackager {
  async addAsset(asset: CSSAsset) {
    if (this.options.minify) {
      console.log("minify")
      const config = (await asset.parentBundle!.entryAsset.getConfig(
        ["purgecss.config.js"],
        { packageKey: "purgecss" }
      )) as PurgeCSS.Options

      if (config) {
        console.log("config")
        asset.generated!.css = new PurgeCSS({
          ...config,
          css: [{ extension: "css", raw: asset.generated!.css }]
        }).purge()[0].css
      }
    }

    return super.addAsset(asset)
  }
}

export = PurgeCSSPackager
