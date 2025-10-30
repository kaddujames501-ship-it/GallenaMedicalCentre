import { useEffect } from 'react';

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function hexToRgb(hex: string) {
  const m = hex.replace('#', '');
  const bigint = parseInt(m, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function mix(c1: string, c2: string, t: number) {
  const a = hexToRgb(c1);
  const b = hexToRgb(c2);
  return `rgb(${lerp(a.r, b.r, t)}, ${lerp(a.g, b.g, t)}, ${lerp(a.b, b.b, t)})`;
}

function rgbStringToRgb(str: string) {
  const m = str.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i);
  if (!m || m.length < 4) return { r: 255, g: 255, b: 255 };
  return {
    r: parseInt(m[1] ?? '255', 10),
    g: parseInt(m[2] ?? '255', 10),
    b: parseInt(m[3] ?? '255', 10),
  };
}

function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }) {
  const srgb = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * (srgb[0] ?? 0) + 0.7152 * (srgb[1] ?? 0) + 0.0722 * (srgb[2] ?? 0);
}

export default function ScrollBg() {
  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      if (root.classList.contains('dark')) {
        root.style.setProperty('--page-bg', '#0b0b0b');
        root.style.setProperty('--text-color', '#e2e8f0');
        root.style.setProperty('--muted-color', '#94a3b8');
      } else {
        root.style.setProperty('--page-bg', '#ffffff');
        root.style.setProperty('--text-color', '#0f172a');
        root.style.setProperty('--muted-color', '#64748b');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return null;
}
