import { motion } from 'motion/react'
import { Check, Star } from 'lucide-react'

const items = [
  'Sem mensalidades abusivas',
  'Aceite PIX',
  'Controle total',
  'Delivery próprio',
  'Site incluso',
  'Cardápio Digital',
  'Aplicativo Personalizado',
  'Gestão completa',
  'Atendimento Inteligente',
]

export default function Benefits() {
  return (
    <section id="como-funciona" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-start gap-14 lg:grid-cols-2">
        {/* Left heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs font-medium text-gold">
            POR QUE QIARA
          </span>
          <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
            Tudo que você precisa<br />para <span className="gold-text">vender mais.</span>
          </h2>
          <p className="mt-5 max-w-md text-white/60">
            Uma plataforma completa que une tecnologia, marketing e gestão para o seu negócio
            crescer todos os dias — sem complicação e sem taxas escondidas.
          </p>
        </motion.div>

        {/* Right checklist */}
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-grad text-ink">
                <Check size={15} strokeWidth={3} />
              </span>
              <span className="text-sm text-white/85">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-strong mx-auto mt-20 max-w-3xl rounded-3xl p-8 text-center shadow-glass md:p-12"
      >
        <div className="mb-4 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className="fill-gold text-gold" />
          ))}
        </div>
        <p className="font-heading text-2xl font-semibold leading-snug text-white md:text-3xl">
          “Depois da Qiara Delivery nossas vendas cresceram mais de{' '}
          <span className="gold-text">60%.</span>”
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-gold-grad font-heading font-bold text-ink">
            R
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-white">Ricardo Menezes</div>
            <div className="text-xs text-white/60">Dono de Restaurante</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
