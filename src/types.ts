import PurgeCSS from "purgecss"

export type PurgeCSSOptions = PurgeCSS["purge"] extends (arg: infer T) => any
  ? Extract<T, object>
  : never

export type PluginOptions = Omit<PurgeCSSOptions, "css">
