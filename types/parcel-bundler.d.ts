declare module "parcel-bundler/src/Bundle" {
  import Asset = require("parcel-bundler/src/Asset")

  class Bundle<A extends Asset = Asset> {
    public entryAsset: A
  }

  export = Bundle
}

declare module "parcel-bundler/src/Asset" {
  import Bundle = require("parcel-bundler/src/Bundle")

  class Asset {
    public parentBundle?: Bundle<this>
    public generated?: { [type: string]: string }

    getConfig(
      filenames: string[],
      opts?: { packageKey?: string; path?: string; load: false }
    ): Promise<string>
    getConfig(
      filenames: string[],
      opts?: { packageKey?: string; path?: string; load?: true }
    ): Promise<any>
  }

  export = Asset
}

declare module "parcel-bundler/src/assets/CSSAsset" {
  import Asset = require("parcel-bundler/src/Asset")

  class CSSAsset extends Asset {
    public generated?: { css: string }
  }

  export = CSSAsset
}

declare module "parcel-bundler/src/packagers/Packager" {
  import { WriteStream } from "fs"
  import * as Bundler from "parcel-bundler"
  import Bundle = require("parcel-bundler/src/Bundle")
  import Asset = require("parcel-bundler/src/Asset")

  abstract class Packager<A extends Asset = Asset> {
    public bundle: Bundle<A>
    public bundler: Bundler
    public options: Bundler.ParcelOptions

    protected dest?: WriteStream & {
      write(chunk: any): Promise<void>
      end(): Promise<void>
    }

    static shouldAddAsset(): boolean

    constructor(bundle: Bundle<A>, bundler: Bundler)
    setup(): Promise<void>
    write(string: string): Promise<void>
    start(): Promise<void>
    abstract addAsset(asset: A): Promise<void>
    getSize(): number
    end(): Promise<void>
  }

  export = Packager
}

declare module "parcel-bundler/src/packagers/CSSPackager" {
  import Packager = require("parcel-bundler/src/packagers/Packager")
  import CSSAsset = require("parcel-bundler/src/assets/CSSAsset")

  class CSSPackager extends Packager<CSSAsset> {
    addAsset(asset: CSSAsset): Promise<void>
  }

  export = CSSPackager
}
