import purgecss = require("@fullhuman/postcss-purgecss")
import CSSAsset = require("parcel-bundler/src/assets/CSSAsset")
import postcss = require("postcss")

export = class PurgedCSSAsset extends CSSAsset {
  async transform() {
    if (this.options.minify) {
      const config = await this.getConfig(["purgecss.config.js"], {
        packageKey: "purgecss"
      })

      if (!config) return

      await this.parseIfNeeded()
      const res = await postcss([purgecss(config)]).process(this.getCSSAst(), {
        from: this.name,
        to: this.name
      })

      this.ast.css = res.css
      this.ast.dirty = false
    }

    await super.transform()
  }
}
