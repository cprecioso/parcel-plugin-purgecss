import CSSAsset from "parcel-bundler/src/assets/CSSAsset"
import CSSPackager from "parcel-bundler/src/packagers/CSSPackager"
import PurgeCSS from "purgecss"
import type { PluginOptions } from "./types"

class PurgeCSSPackager extends CSSPackager {
  async addAsset(asset: CSSAsset) {
    if (this.options.minify) {
      const config = (await asset.parentBundle!.entryAsset.getConfig(
        ["purgecss.config.js"],
        { packageKey: "purgecss" }
      )) as PluginOptions

      if (config) {
        asset.generated!.css = (
          await new PurgeCSS().purge({
            ...config,
            css: [{ raw: asset.generated!.css }],
          })
        )[0].css
      }
    }

    return super.addAsset(asset)
  }
}

export default PurgeCSSPackager as any
