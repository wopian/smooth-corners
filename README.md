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

[Live demo](https://wopian.github.io/smooth-corners/) featuring several different `--smooth-corners` values

- `5`, iOS App Icon
- `4`, Squircle (default)
- `2.6`, KakaoTalk profile icon
- `0.6`, [Astroid]

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

#### Customise Shape / Roundness

You can customise the mask shape by using a CSS custom property. This can be scoped locally to the selector or defined globally in `:root {}`

`--smooth-corners: nA[, nB]`

- **nA** - Float,


```css
.mask {
  /* Integer 0 to 100. Scoped locally or globally in :root {}
     < 1 are concave rhombuses
     = 1 is a perfect rhombus
     > 1 and <2 are convex rhombuses>
     = 2 is a perfect circle
     > 2 are rounded squares */
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
- [cdn.jsdelivr.net/npm/smooth-corners/paint.js](https://cdn.jsdelivr.net/npm/smooth-corners/paint.js)

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
