import sharp from 'sharp'
import { statSync } from 'fs'

/**
 * Crop team portraits to a consistent 3:4 aspect with the face at ~25% from top.
 * We do NOT change the natural dimensions beyond cropping; sharp handles the rest.
 */

const MEMBERS = [
  // faceY: approximate pixel Y where the center of the face sits (eye-nose line)
  { name: 'claudio',   src: 'public/team/claudio.jpg',   faceY: 950  },
  { name: 'graziella', src: 'public/team/graziella.jpg', faceY: 500  },
  { name: 'thaise',    src: 'public/team/thaise.jpg',    faceY: 480  },
]

const TARGET_ASPECT = 3 / 4
const FACE_Y_RATIO  = 0.25 // face sits at 25% from top of the cropped image

for (const m of MEMBERS) {
  const meta = await sharp(m.src).metadata()
  const W = meta.width
  const H = meta.height

  // Try keeping full width and cropping vertically
  let cropW = W
  let cropH = Math.round(cropW / TARGET_ASPECT)

  // Start Y so that face sits at FACE_Y_RATIO of the crop
  let top = Math.round(m.faceY - cropH * FACE_Y_RATIO)

  // If this pushes us off the image, reduce the crop height
  if (top < 0 || top + cropH > H) {
    // Compute max cropH that keeps face at FACE_Y_RATIO AND fits in original
    const maxHByTop = Math.floor(m.faceY / FACE_Y_RATIO)             // face fits from top
    const maxHByBot = Math.floor((H - m.faceY) / (1 - FACE_Y_RATIO)) // face fits from bottom
    cropH = Math.min(cropH, maxHByTop, maxHByBot)
    cropW = Math.round(cropH * TARGET_ASPECT)
    top = Math.round(m.faceY - cropH * FACE_Y_RATIO)
  }

  // Centralize horizontally
  const left = Math.max(0, Math.round((W - cropW) / 2))

  // Final sanity
  const safeTop = Math.max(0, Math.min(top, H - cropH))
  const out = `public/team/${m.name}.jpg`

  await sharp(m.src)
    .rotate()
    .extract({ left, top: safeTop, width: cropW, height: cropH })
    .resize({ width: 1400, withoutEnlargement: true })
    .modulate({ brightness: 1.02, saturation: 0.92 })
    .linear(1.05, -5)
    .sharpen({ sigma: 0.5, m1: 0.5, m2: 0.5 })
    .jpeg({ quality: 85, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
    .toFile(out + '.tmp')

  const inSize  = statSync(m.src).size
  const outSize = statSync(out + '.tmp').size
  // Replace original
  const fs = await import('fs')
  fs.renameSync(out + '.tmp', out)
  console.log(
    `${m.name.padEnd(10)}  ${W}x${H} → crop ${cropW}x${cropH}  top=${safeTop}  ${(inSize/1024).toFixed(0)}KB → ${(outSize/1024).toFixed(0)}KB`
  )
}

console.log('\nDone. Faces aligned at ~25% from top.')
