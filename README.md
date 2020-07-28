<h1 align=center>Smooth Corners</h1>

<p align=center>Superellipse masks using the <a href='https://developer.mozilla.org/en-US/docs/Web/Houdini'>CSS Houdini</a> API</p>

![](https://repository-images.githubusercontent.com/283091953/46814880-d08f-11ea-8933-05a3818dc9b7)

## Usage

### JavaScript

Add [paint.js] to your web application or with `npm install smooth-corners`

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

#### Customise Superellipse Shape

```css
.round {
  /* Integer 1 to 100. Scopped locally or globally in :root {}
     2 is a perfect circle
     < 2 are diamonds / asteroids
     > 2 are rounded squares */
  --smooth-corners: 3;
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
  background: #d01257; /* So you can see it */
```

### HTML

Register the [Paint Worklet] to the distributed path of [paint.js].

E.g This example would request `https://wopian.github.io/smooth-corners/paint.js` when run:

```html
<body>
  <div class='round'></div>
  <div class='squircle'></div>
  ...
  <script>
    if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('paint.js')
  </script>
</body>
```

### Result

![2 examples: A rounded pink square and a pink squircle][Example]

[paint.js]:https://wopian.github.io/smooth-corners/paint.js
[Paint Worklet]:https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet
[Example]:https://raw.githubusercontent.com/wopian/smooth-corners/master/example.png
