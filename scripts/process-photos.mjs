import sharp from 'sharp'
import { readdirSync, mkdirSync, statSync } from 'fs'
import { join, basename, extname } from 'path'

/**
 * Editorial photo treatment for BTF site.
 *
 * Pipeline applied to each photo:
 *  - Resize to max 2000px wide (preserves aspect, no upscaling)
 *  - Subtle desaturation (modulate saturation 0.85) for institutional feel
 *  - Brightness/contrast tone: slight dark-side lift, mid-tone contrast boost
 *  - Mild sharpening (editorial crispness, not over-sharp)
 *  - JPEG quality 82 with mozjpeg encoder (great quality/size ratio)
 */

const SRC_DIR = 'public/photos'
const OUT_DIR = 'public/photos/processed'

mkdirSync(OUT_DIR, { recursive: true })

const files = readdirSync(SRC_DIR).filter(
  f => /\.(jpe?g|png)$/i.test(f) && statSync(join(SRC_DIR, f)).isFile()
)

for (const file of files) {
  const inp = join(SRC_DIR, file)
  const out = join(OUT_DIR, `${basename(file, extname(file))}.jpg`)

  await sharp(inp)
    .rotate() // honor EXIF orientation
    .resize({ width: 2000, withoutEnlargement: true, fit: 'inside' })
    .modulate({
      brightness: 1.02,   // very slight lift
      saturation: 0.88,   // editorial desaturation
      hue: 0,
    })
    .linear(1.08, -8)     // mild contrast (a*x + b) — bumps midtones, deepens shadows
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.5 })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
    .toFile(out)

  const { size: inS } = statSync(inp)
  const { size: outS } = statSync(out)
  const r = (1 - outS / inS) * 100
  console.log(
    `${file.padEnd(34)}  ${(inS / 1024 / 1024).toFixed(2)}MB → ${(outS / 1024 / 1024).toFixed(2)}MB  (-${r.toFixed(0)}%)`
  )
}

console.log('\nDone. Output in public/photos/processed/')
