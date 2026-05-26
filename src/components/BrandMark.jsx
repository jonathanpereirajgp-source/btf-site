/**
 * Editorial decorative use of brand assets.
 * Place inside a `relative overflow-hidden` parent.
 */
export default function BrandMark({
  kind = 'padronagem',
  tone = 'dark',
  size = 'lg',
  position = 'br',
  className = '',
  style = {},
}) {
  const sources = {
    padronagem: {
      light:  '/grafismos/padronagem-branco.svg',
      dark:   '/grafismos/padronagem-azul.svg',
      moss:   '/grafismos/padronagem-verde.svg',
      copper: '/grafismos/padronagem-laranja.svg',
    },
    icon: {
      light: '/brand/icon-branco.svg',
      dark:  '/brand/icon-azul.svg',
      moss:  '/brand/icon-verde.svg',
    },
    chave: {
      light: '/grafismos/chave-branco.svg',
      dark:  '/grafismos/chave-azul.svg',
      moss:  '/grafismos/chave-verde.svg',
    },
    duasChaves: {
      light: '/grafismos/duas-chaves-branco.svg',
      dark:  '/grafismos/duas-chaves-branco.svg',
      moss:  '/grafismos/duas-chaves-verde.svg',
    },
  }
  const src = sources[kind]?.[tone] ?? sources.padronagem[tone]

  const sizes = {
    sm: 'w-48',
    md: 'w-64',
    lg: 'w-[400px]',
    xl: 'w-[620px]',
    xxl: 'w-[880px]',
    xxxl: 'w-[1200px]',
  }

  const positions = {
    br: '-right-24 -bottom-24',
    bl: '-left-24 -bottom-24',
    tr: '-right-24 -top-24',
    tl: '-left-24 -top-24',
    r: 'right-[-30%] top-1/2 -translate-y-1/2',
    l: 'left-[-30%] top-1/2 -translate-y-1/2',
    c: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    centerR: 'right-[-15%] top-[10%]',
    centerL: 'left-[-15%] top-[20%]',
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden
      className={`pointer-events-none select-none absolute ${sizes[size]} ${positions[position]} ${className}`}
      style={style}
    />
  )
}
