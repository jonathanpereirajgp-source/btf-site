import sharp from 'sharp'
import { statSync } from 'fs'

/**
 * Create *home-only* cropped portraits with the face at ~25% from top.
 * Originals in /public/team/*.jpg stay untouched for use on /time page.
 */

const MEMBERS = [
  { name: 'claudio',   src: 'public/team/claudio.jpg',   faceY: 950, out: 'public/team/claudio-home.jpg' },
  { name: 'graziella', src: 'public/team/graziella.jpg', faceY: 500, out: 'public/team/graziella-home.jpg' },
  { name: 'thaise',    src: 'public/team/thaise.jpg',    faceY: 480, out: 'public/team/thaise-home.jpg' },
]

const TARGET_ASPECT = 3 / 4
const FACE_Y_RATIO  = 0.25

for (const m of MEMBERS) {
  const meta = await sharp(m.src).metadata()
  const W = meta.width
  const H = meta.height

  let cropW = W
  let cropH = Math.round(cropW / TARGET_ASPECT)
  let top = Math.round(m.faceY - cropH * FACE_Y_RATIO)

  if (top < 0 || top + cropH > H) {
    const maxHByTop = Math.floor(m.faceY / FACE_Y_RATIO)
    const maxHByBot = Math.floor((H - m.faceY) / (1 - FACE_Y_RATIO))
    cropH = Math.min(cropH, maxHByTop, maxHByBot)
    cropW = Math.round(cropH * TARGET_ASPECT)
    top = Math.round(m.faceY - cropH * FACE_Y_RATIO)
  }

  const left = Math.max(0, Math.round((W - cropW) / 2))
  const safeTop = Math.max(0, Math.min(top, H - cropH))

  await sharp(m.src)
    .rotate()
    .extract({ left, top: safeTop, width: cropW, height: cropH })
    .resize({ width: 1400, withoutEnlargement: true })
    .modulate({ brightness: 1.02, saturation: 0.92 })
    .linear(1.05, -5)
    .sharpen({ sigma: 0.5, m1: 0.5, m2: 0.5 })
    .jpeg({ quality: 85, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
    .toFile(m.out)

  const outSize = statSync(m.out).size
  console.log(`${m.name.padEnd(10)}  crop ${cropW}x${cropH} top=${safeTop}  → ${(outSize/1024).toFixed(0)}KB  (${m.out})`)
}

console.log('\nDone. Home-only portraits saved.')
