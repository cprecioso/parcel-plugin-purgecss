# parcel-plugin-purgecss

A Parcel plugin to remove unused rules from your bundled CSS files.

## How it works

This plugin uses [purgecss](https://github.com/FullHuman/purgecss) to remove unused CSS rules.

It works by reading your source files and checking which CSS selectors are mentioned in your HTML and Javascript code.

This is very useful if you're using a full-featured CSS framework like Bootstrap or Materialize, or even Atomic CSS libraries like Tachyons or BassCSS since you might not use all the provided components and helpers.

## Usage

Just install the plugin as a dependency using yarn/npm/pnpm/... and build normally with Parcel. There are no configuration options.

## Installation

```
yarn add parcel-plugin-purgecss
```

or

```
npm install parcel-plugin-purgecss
```

## Issues

This plugin will look for files in your project folder with the following extensions: `html`, `js`, `jsx`, `vue`, `svelte` and `pug`. Those extensions are hard-coded at the moment (take a look at [issue #4](https://github.com/cprecioso/parcel-plugin-purgecss/issues/4)).
