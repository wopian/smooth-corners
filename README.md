<h1 align=center>Smooth Corners</h1>

<p align=center>
  <a href='https://www.npmjs.com/package/smooth-corners'><img alt='npm' src='https://flat.badgen.net/npm/v/smooth-corners'></a>
  <a href='https://www.npmjs.com/package/smooth-corners'><img alt='npm' src='https://flat.badgen.net/npm/dt/smooth-corners'></a>
  <a href='https://david-dm.org/wopian/smooth-corners'><img alt='deps' src='https://flat.badgen.net/david/dep/wopian/smooth-corners'></a>
  <a href='https://bundlephobia.com/result?p=smooth-corners'><img alt='bundlephobia' src='https://flat.badgen.net/bundlephobia/minzip/smooth-corners?label=library%20size'></a>
</p>

<p align=center>
  <a href='https://github.com/wopian/smooth-corners/actions'><img alt='checks' src='https://flat.badgen.net/github/checks/wopian/smooth-corners'></a>
  <!--<a href='https://github.com/wopian/smooth-corners/network/dependents'><img alt='repoDependants' src='https://flat.badgen.net/github/dependents-repo/wopian/smooth-corners'></a>-->
  <a href='https://github.com/wopian/smooth-corners/graphs/contributors'><img alt='devDeps' src='https://flat.badgen.net/github/contributors/wopian/smooth-corners'></a>
  <a href='https://github.com/sponsors/wopian'><img alt='sponsor' src='https://flat.badgen.net/badge/sponsor/%E2%9D%A4/pink?icon=github'></a>
</p>

<p align=center>Superellipse masks using the <a href='https://developer.mozilla.org/en-US/docs/Web/Houdini'>CSS Houdini</a> API</p>

![Static demo of Smooth Corners][CTA]

## Demo

[Live demo](https://wopian.github.io/smooth-corners/) featuring several different `--smooth-corners` values and an interactive editor

## Limitations

To avoid leaking visited sites, the CSS Paint API is disabled on Chromium-based browsers for `<a>` elements with an `href` attribute and all children of that element. For further details see the following:

- The CSS Painting API [Privacy Considerations section](https://drafts.css-houdini.org/css-paint-api/#privacy-considerations)
- The CSS Painting API spec issue [“CSS Paint API leaks browsing history”](https://github.com/w3c/css-houdini-drafts/issues/791)

To work around this limitation, `mask-image: paint(smooth-corners)` can be applied to the parent element of the `<a>` element, for example:

```html
<div style='mask-image: paint(smooth-corners)'>
  <a href='https://github.com/wopian/smooth-corners'>Smooth Corners</a>
</div>
```

## Usage

### CSS

Add `mask-image: paint(smooth-corners)` to the elements you want to mask

#### Default (Squircle)

```css
.squircle {
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
  background: #d01257; /* So you can see it */
}
```

#### Customise Curvature

You can customise the mask curvature by using a CSS variable. This can be scoped locally to the selector or defined globally in `:root {}`

`--smooth-corners: X[, Y]`

- **X** - Float, Curvature of the X axis
- **Y** - Float, Curvature of the Y axis (optional, defaults to X axis)

##### Shapes by **X** value

- `0.6` - [Astroid]
- `< 1` - Concave rhombus
- `= 1` - Rhombus
- `> 1 and < 2` - Convex rhombus
- `= 2` - Circle
- `> 2` - Rounded rectangles
- `2.6` - KakaoTalk profile icon
- `4.0` - Squircle
- `5.0` - iOS app icon

###### Example

```css
.mask {
  --smooth-corners: 3;
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
  background: #d01257; /* So you can see it */
```

### Registering the Paint Worklet

Register the [Paint Worklet] to the distributed path of [paint.js].

#### Register with a CDN (preferred)

Use any CDN that serves packages from the NPM registry, for example:

- [unpkg.com/smooth-corners](https://unpkg.com/smooth-corners)
- [cdn.jsdelivr.net/npm/smooth-corners/paint.js](https://cdn.jsdelivr.net/npm/smooth-corners/lib/paint.js)

```html
<script>
  if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners')
</script>
```

#### Register with a file path

Download [paint.js] or install with `npm install smooth-corners`

```js
// src/assets/paint.js
import 'smooth-corners' // ES Modules
```

```js
// src/assets/paint.js
require('smooth-corners') // CommonJS
```

Like Web Workers, the [Paint Worklet] API requests the module path in the browser during runtime and must be a seperate entryfile. This is not the path to the source code location.

```html
<script>
  if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('/assets/paint.js')
</script>
```

### Result

![2 examples: A rounded pink square and a pink squircle][Example]

[paint.js]:https://wopian.github.io/smooth-corners/paint.js
[Paint Worklet]:https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet
[CTA]:https://raw.githubusercontent.com/wopian/smooth-corners/master/.github/images/cta.png
[Example]:https://raw.githubusercontent.com/wopian/smooth-corners/master/.github/images/example.png
[Astroid]:https://en.wikipedia.org/wiki/Astroid
