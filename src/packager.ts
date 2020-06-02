import CSSAsset from "parcel-bundler/src/assets/CSSAsset"
import CSSPackager from "parcel-bundler/src/packagers/CSSPackager"
import PurgeCSS from "purgecss"

class PurgeCSSPackager extends CSSPackager {
  async addAsset(asset: CSSAsset) {
    if (this.options.minify) {
      const config = (await asset.parentBundle!.entryAsset.getConfig(
        ["purgecss.config.js"],
        { packageKey: "purgecss" }
      )) as PurgeCSS.Options

      if (config) {
        asset.generated!.css = new PurgeCSS({
          ...config,
          css: [{ extension: "css", raw: asset.generated!.css }],
        }).purge()[0].css
      }
    }

    return super.addAsset(asset)
  }
}

export default PurgeCSSPackager
