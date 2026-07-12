// Central de marca — Qiara Delivery
export const WHATS = 'https://wa.me/5519988013439'

export function waLink(message = 'Olá! Quero conhecer a Qiara Delivery.') {
  return `${WHATS}?text=${encodeURIComponent(message)}`
}

export const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4'
