# AuthorSliderHandleElement [![](https://data.jsdelivr.com/v1/package/npm/@author.io/element-slider-handle/badge)](https://www.jsdelivr.com/package/npm/@author.io/element-slider-handle?path=dist) [![Build Status](https://travis-ci.org/author-elements/slider-handle.svg?branch=master&style=for-the-badge)](https://travis-ci.org/author-elements/slider-handle)

<!-- TODO: Add description -->

![Source Size](https://img.shields.io/github/size/author-elements/slider-handle/src/element.js.svg?colorB=%23333333&label=Source&logo=JavaScript&logoColor=%23aaaaaa&style=for-the-badge) ![Deliverable Size](https://img.shields.io/bundlephobia/minzip/@author.io/element-slider-handle.svg?colorB=%23333333&label=Minified-Gzipped&logo=JavaScript&style=for-the-badge) ![npm](https://img.shields.io/npm/v/@author.io/element-slider-handle.svg?colorB=%23333&label=%40author.io%2Felement-slider-handle&logo=npm&style=for-the-badge)

We're using BrowserStack to make sure these components work on the browsers developers care about.

<a href="https://browserstack.com"><img src="https://github.com/author-elements/slider-handle/raw/master/browserstack.png" height="30px"/></a>

## Usage

There are 4 versions of this element:

1. *author-slider-handle.min.js* (ES6 Minified for Production)
1. _author-slider-handle.js_ (ES6 Unminified for Debugging)
1. *author-slider-handle.es5.min.js* (ES5 Minified for Production)
1. _author-slider-handle.es5.js_ (ES5 Unminified for Debugging)

Each version has it's own source map, so it's always possible to trace activity back to a specific code block in the source.

You only need to choose one of these files. If you need to support Internet Explorer, older versions of Chrome/Firefox/Safari, then you likely need the ES5 version.

*Via Global CDN*

```html
<html>
  <head>
    <script src="https://cdn.author.io/author-elements/base/1.0.0/author-base.min.js"></script>
    <script src="https://cdn.author.io/author-elements/slider-handle/x.x.x/author-slider-handle.min.js"></script>
  </head>
</html>
```

*Via npm*

If the [base class](https://github.com/author-elements/base) is not yet installed, install it:

`npm install @author.io/element-base -S`

Next, install the slider-handle module locally:

`npm install @author.io/element-slider-handle -S`

Then include them in your HTML:

```html
<html>
  <head>
    <script src="./node_modules/@author.io/element-base/dist/author-base.min.js"></script>
    <script src="./node_modules/@author.io/element-slider-handle/dist/author-slider-handle.min.js"></script>
  </head>

  <body>

  </body>
</html>
```
