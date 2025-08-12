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

class SmoothCornerPainterV2 {
  static get inputProperties() {
    return ['--smooth-corners', '--smooth-corners-radius', '--smooth-corners-steps']
  }


  superellipse(a, b, nX = 4, nY, steps = 360) {
    if (Number.isNaN(nX)) nX = 4
    if (typeof nY === 'undefined' || Number.isNaN(nY)) nY = nX
    if (nX > 100) nX = 100
    if (nY > 100) nY = 100
    if (nX < 0.00000000001) nX = 0.00000000001
    if (nY < 0.00000000001) nY = 0.00000000001

    const nX2 = 2 / nX
    const nY2 = nY ? 2 / nY : nX2
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

  paint(ctx, size, props) {

    const [nX, nY] = props
      .get('--smooth-corners')
      .toString()
      .replace(/ /g, '')
      .split(',')
      .map(parseFloat)

    const halfWidth = size.width / 2
    const halfHeight = size.height / 2
    const cornerRadius = Math.min(parseFloat(props.get('--smooth-corner-radius')) || size.width / 2, size.height / 2, size.width / 2)
    const steps = parseFloat(props.get('--smooth-corner-steps')) || 360
    const smoothCorners = this.superellipse(
      cornerRadius,
      cornerRadius,
      nX,
      nY,
      steps
    )

    const xOffset = halfWidth - cornerRadius
    const yOffset = halfHeight - cornerRadius

    const leftBottomCorners = smoothCorners.slice(0, steps / 4).map(({ x, y }) => ({ x: x + xOffset, y: y + yOffset }))
    const rightBottomCorners = smoothCorners.slice(steps / 4, steps / 2).map(({ x, y }) => ({ x: x - xOffset, y: y + yOffset }))
    const rightTopCorners = smoothCorners.slice(steps / 2, steps * 3 / 4).map(({ x, y }) => ({ x: x - xOffset, y: y - yOffset }))
    const leftTopCorners = smoothCorners.slice(steps * 3 / 4, steps).map(({ x, y }) => ({ x: x + xOffset, y: y - yOffset }))
    const points = [...leftBottomCorners, ...rightBottomCorners, ...rightTopCorners, ...leftTopCorners]

    ctx.fillStyle = '#000'
    ctx.setTransform(1, 0, 0, 1, halfWidth, halfHeight)
    ctx.beginPath()
    points.forEach(({ x, y }, i) => {
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.closePath()
    ctx.fill()

  }




}

// eslint-disable-next-line no-undef
registerPaint('smooth-corners', SmoothCornersPainter)
registerPaint('smooth-corners-v2', SmoothCornerPainterV2)
