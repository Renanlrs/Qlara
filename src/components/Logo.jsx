import { useState } from 'react'

// Renderiza o mascote oficial (public/qiara-mascot.png).
// Enquanto o arquivo não estiver presente, mostra um avatar dourado elegante.
export default function Logo({ size = 56 }) {
  const [ok, setOk] = useState(true)

  if (ok) {
    return (
      <img
        src="/qiara-mascot.png"
        alt="Qiara Delivery"
        style={{ height: size, width: 'auto' }}
        className="object-contain drop-shadow-[0_6px_20px_rgba(248,197,72,0.35)]"
        onError={() => setOk(false)}
      />
    )
  }

  return (
    <div
      style={{ height: size, width: size }}
      className="grid place-items-center rounded-2xl bg-gold-grad text-ink font-heading font-extrabold shadow-gold"
    >
      <span style={{ fontSize: size * 0.5 }}>Q</span>
    </div>
  )
}
