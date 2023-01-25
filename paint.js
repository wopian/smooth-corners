class SmoothCornersPainter {
  static get inputProperties() {
    return ['--smooth-corners']
  }

  superellipse(a, b, nX = 4, nY) {
    if (Number.isNaN(nX)) nX = 4
    if (typeof nY === 'undefined' || Number.isNaN(nY)) nY = nX
    if (nX > 100) nX = 100
    if (nY > 100) nY = 100
    if (nX < 0.00000000001) nX = 0.00000000001
    if (nY < 0.00000000001) nY = 0.00000000001

    const nX2 = 2 / nX
    const nY2 = nY ? 2 / nY : nX2
    const steps = 360
    const step = (2 * Math.PI) / steps
    const points = t => {
      const cosT = Math.cos(t)
      const sinT = Math.sin(t)
      return {
        x: Math.abs(cosT) ** nX2 * a * Math.sign(cosT),
        y: Math.abs(sinT) ** nY2 * b * Math.sign(sinT)
      }
    }
    return Array.from({ length: steps }, (_, i) => points(i * step))
  }

  paint(ctx, geom, properties) {
    const [nX, nY] = properties
      .get('--smooth-corners')
      .toString()
      .replace(/ /g, '')
      .split(',')

    const width = geom.width / 2
    const height = geom.height / 2
    const smooth = this.superellipse(
      width,
      height,
      parseFloat(nX),
      parseFloat(nY)
    )

    ctx.fillStyle = '#000'
    ctx.setTransform(1, 0, 0, 1, width, height)
    ctx.beginPath()

    for (let i = 0; i < smooth.length; i++) {
      const { x, y } = smooth[i]
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }

    ctx.closePath()
    ctx.fill()
  }
}

// eslint-disable-next-line no-undef
registerPaint('smooth-corners', SmoothCornersPainter)
