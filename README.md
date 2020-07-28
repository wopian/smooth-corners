<h1 align=center>Smooth Corners</h1>

<p align=center>Superellipse masks using the <a href='https://developer.mozilla.org/en-US/docs/Web/Houdini'>CSS Houndini</a> API</p>

![](https://repository-images.githubusercontent.com/283091953/46814880-d08f-11ea-8933-05a3818dc9b7)

## Usage

### JavaScript

Add [paint.js] to your web application.

[paint.js]:https://wopian.github.io/smooth-corners/paint.js

### CSS

#### Default (Squircle)

```css
.round {
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
  background: #d01257; /* So you can see it */
}
```

#### Customise Superellipse Shape

```cs
.round {
  --smooth-corners: 3;
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
  background: #d01257;
```

### HTML

```html
<body>
  <div class='round'></div>
  ...
  <script>
    if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('paint.js')
  </script>
</body>
```

### Result

![]()
