import CSSPackager = require("parcel-bundler/src/packagers/CSSPackager")
import PurgeCSS = require("purgecss")

class PurgeCSSPackager extends CSSPackager {
  async addAsset(asset) {
    if (this.options.minify) {
      console.log("minify")
      const config = await asset.parentBundle.entryAsset.getConfig(
        ["purgecss.config.js"],
        { packageKey: "purgecss" }
      )

      if (config) {
        console.log("config")
        asset.generated.css = new PurgeCSS({
          ...config,
          css: [{ extension: "css", raw: asset.generated.css }]
        }).purge()[0].css
      }
    }

    return super.addAsset(asset)
  }
}

export = PurgeCSSPackager
