<h1 align=center>Smooth Corners</h1>

<p align=center>
  <a href='https://www.npmjs.com/package/smooth-corners'><img alt='npm' src='https://flat.badgen.net/npm/v/smooth-corners'></a>
  <a href='https://www.npmjs.com/package/smooth-corners'><img alt='npm' src='https://flat.badgen.net/npm/dt/smooth-corners'></a>
  <a href='https://david-dm.org/wopian/smooth-corners'><img alt='deps' src=https://flat.badgen.net/david/dep/wopian/smooth-corners></a>
  <a href='https://bundlephobia.com/result?p=smooth-corners'><img alt='bundlephobia' src='https://flat.badgen.net/bundlephobia/minzip/smooth-corners?label=library%20size'></a>
</p>

<p align=center>
  <a href='https://github.com/wopian/smooth-corners/actions'><img alt='checks' src='https://flat.badgen.net/github/checks/wopian/smooth-corners'></a>
  <!--<a href='https://github.com/wopian/smooth-corners/network/dependents'><img alt='repoDependants' src='https://flat.badgen.net/github/dependents-repo/wopian/smooth-corners'></a>-->
  <a href='https://github.com/wopian/smooth-corners/graphs/contributors'><img alt='devDeps' src='https://flat.badgen.net/github/contributors/wopian/smooth-corners'></a>
  <a href='https://github.com/sponsors/wopian'><img alt='sponsor' src='https://flat.badgen.net/badge/sponsor/%E2%9D%A4/pink?icon=github'></a>
</p>

<p align=center>Superellipse masks using the <a href='https://developer.mozilla.org/en-US/docs/Web/Houdini'>CSS Houdini</a> API</p>

![](https://repository-images.githubusercontent.com/283091953/46814880-d08f-11ea-8933-05a3818dc9b7)

## Usage

### CSS

Add `mask-image: paint(smooth-corners)` to the elements you want to mask

#### Default (Squircle)

Without a `--smooth-corners` variable set it will default to a value of `4`

```css
.squircle {
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
  background: #d01257; /* So you can see it */
}
```

#### Customise Shape / Roundness

```css
.mask {
  /* Integer 1 to 100. Scoped locally or globally in :root {}
     2 is a perfect circle
     < 2 are diamonds / asteroids
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

- https://unpkg.com/smooth-corners
- https://cdn.jsdelivr.net/npm/smooth-corners/paint.js

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
[Example]:https://raw.githubusercontent.com/wopian/smooth-corners/master/example.png
