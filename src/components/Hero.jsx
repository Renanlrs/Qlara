import { motion } from 'motion/react'
import { useState } from 'react'
import { Phone, Play } from 'lucide-react'
import { HERO_VIDEO, waLink } from '../brand'

const floatingCards = [
  { emoji: '🍔', big: '+3.200 pedidos', small: 'Hoje', pos: 'top-24 left-4 md:left-10', delay: 0 },
  { emoji: '⭐', big: '4.9', small: 'Avaliação média', pos: 'top-40 right-4 md:right-16', delay: 0.6 },
  { emoji: '💰', big: '+R$12 milhões', small: 'Movimentados', pos: 'bottom-36 left-4 md:left-20', delay: 1.1 },
  { emoji: '⚡', big: 'Poucos minutos', small: 'Tempo de entrega', pos: 'bottom-28 right-4 md:right-24', delay: 1.6 },
]

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const [phone, setPhone] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const msg = phone.trim()
      ? `Olá! Quero conhecer a Qiara Delivery. Meu WhatsApp: ${phone.trim()}.`
      : 'Olá! Quero conhecer a Qiara Delivery.'
    window.open(waLink(msg), '_blank')
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video background with slow zoom */}
      <motion.video
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </motion.video>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,transparent,rgba(8,8,8,0.7))]" />

      {/* Floating glass cards (desktop) */}
      {floatingCards.map((c) => (
        <motion.div
          key={c.big}
          custom={c.delay * 4}
          variants={fade}
          initial="hidden"
          animate="show"
          className={`absolute z-20 hidden lg:block ${c.pos}`}
        >
          <div className="glass-strong animate-float rounded-2xl px-5 py-4 shadow-glass" style={{ animationDelay: `${c.delay}s` }}>
            <div className="mb-1 text-2xl">{c.emoji}</div>
            <div className="font-heading text-lg font-bold text-white">{c.big}</div>
            <div className="text-xs text-white/60">{c.small}</div>
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-30 mx-auto flex max-w-[650px] flex-col items-center px-6 text-center">
        <motion.span
          variants={fade}
          custom={0}
          initial="hidden"
          animate="show"
          className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80"
        >
          ✨ Plataforma Inteligente para Delivery
        </motion.span>

        <motion.h1
          variants={fade}
          custom={1}
          initial="hidden"
          animate="show"
          className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Seu Delivery merece<br />
          mais pedidos,<br />
          mais clientes,<br />
          <span className="gold-text animate-shimmer">mais lucro.</span>
        </motion.h1>

        <motion.p
          variants={fade}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          Transforme seu restaurante, hamburgueria, pizzaria ou comércio em uma máquina de vendas
          com tecnologia, marketing e atendimento inteligente.
        </motion.p>

        {/* CTA glass card */}
        <motion.form
          variants={fade}
          custom={3}
          initial="hidden"
          animate="show"
          onSubmit={submit}
          className="glass-strong mt-9 flex w-full max-w-md flex-col gap-2 rounded-2xl p-2 sm:flex-row sm:rounded-full"
        >
          <div className="flex flex-1 items-center gap-2 rounded-full px-4 py-2">
            <Phone size={18} className="text-gold" />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Digite seu WhatsApp"
              className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="rounded-full bg-gold-grad px-6 py-3 text-sm font-semibold text-ink shadow-gold"
          >
            Quero vender mais
          </motion.button>
        </motion.form>

        <motion.a
          variants={fade}
          custom={4}
          initial="hidden"
          animate="show"
          href="#recursos"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/5"
        >
          <Play size={15} /> Ver demonstração
        </motion.a>
      </div>
    </section>
  )
}
