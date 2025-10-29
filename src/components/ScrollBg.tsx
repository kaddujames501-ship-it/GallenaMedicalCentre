import { useEffect } from 'react'

function lerp(a: number, b: number, t: number){
  return Math.round(a + (b - a) * t)
}

function hexToRgb(hex: string){
  const m = hex.replace('#','')
  const bigint = parseInt(m, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

function mix(c1: string, c2: string, t: number){
  const a = hexToRgb(c1)
  const b = hexToRgb(c2)
  return `rgb(${lerp(a.r,b.r,t)}, ${lerp(a.g,b.g,t)}, ${lerp(a.b,b.b,t)})`
}

function rgbStringToRgb(str: string){
  const m = str.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i)
  if(!m) return { r: 255, g: 255, b: 255 }
  return { r: parseInt(m[1],10), g: parseInt(m[2],10), b: parseInt(m[3],10) }
}

function relativeLuminance({ r, g, b }:{r:number,g:number,b:number}){
  const srgb = [r,g,b].map(v=>{
    const c = v/255
    return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4)
  })
  return 0.2126*srgb[0] + 0.7152*srgb[1] + 0.0722*srgb[2]
}

export default function ScrollBg(){
  useEffect(() => {
    const white = '#ffffff'
    const green = '#10b981'
    const blue  = '#0ea5e9'
    const onScroll = () => {
      const root = document.documentElement
      // In dark mode, pin backgrounds to black variants
      if (root.classList.contains('dark')){
        root.style.setProperty('--page-bg', '#0b0b0b')
        root.style.setProperty('--nav-bg', 'rgba(0,0,0,0.85)')
        root.style.setProperty('--text-color', '#e2e8f0')
        root.style.setProperty('--muted-color', '#94a3b8')
        return
      }
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const p = scrollable > 0 ? (window.scrollY / scrollable) : 0
      // 3 segments: white->green (0..1/3), green->blue (1/3..2/3), blue->white (2/3..1)
      const seg = p * 3
      let color = white
      let navColor = white
      if (seg <= 1){
        color = mix(white, green, seg)
        // opposite loop: white->blue
        navColor = mix(white, blue, seg)
      } else if (seg <= 2){
        color = mix(green, blue, seg - 1)
        // opposite: blue->green
        navColor = mix(blue, green, seg - 1)
      } else {
        color = mix(blue, white, seg - 2)
        // opposite: green->white
        navColor = mix(green, white, seg - 2)
      }
      // Determine contrasting text color based on background luminance
      const rgb = rgbStringToRgb(color)
      const L = relativeLuminance(rgb)
      const textColor = L > 0.8 ? '#0f172a' : '#f8fafc'
      const mutedColor = L > 0.8 ? '#64748b' : '#cbd5e1'
      root.style.setProperty('--page-bg', color)
      root.style.setProperty('--nav-bg', navColor)
      root.style.setProperty('--text-color', textColor)
      root.style.setProperty('--muted-color', mutedColor)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return null
}


