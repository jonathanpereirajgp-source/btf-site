import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join, basename, extname } from 'path'

const SRC_DIR = 'public/photos/new'
const OUT_DIR = 'public/photos'

const files = readdirSync(SRC_DIR).filter(
  f => /\.(jpe?g|png)$/i.test(f) && statSync(join(SRC_DIR, f)).isFile()
)

for (const file of files) {
  const inp = join(SRC_DIR, file)
  const out = join(OUT_DIR, `${basename(file, extname(file))}.jpg`)

  await sharp(inp)
    .rotate()
    .resize({ width: 2000, withoutEnlargement: true, fit: 'inside' })
    .modulate({ brightness: 1.02, saturation: 0.88, hue: 0 })
    .linear(1.08, -8)
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.5 })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true, chromaSubsampling: '4:4:4' })
    .toFile(out)

  const inS = statSync(inp).size
  const outS = statSync(out).size
  console.log(
    `${file.padEnd(28)}  ${(inS / 1024).toFixed(0)}KB -> ${(outS / 1024).toFixed(0)}KB`
  )
}
