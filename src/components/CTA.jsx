import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { waLink } from '../brand'

export default function CTA() {
  return (
    <section id="contato" className="relative mx-auto max-w-5xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center shadow-glass md:px-16"
      >
        {/* glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/25 blur-[100px]" />

        <h2 className="relative font-heading text-5xl font-extrabold leading-[1.05] text-white md:text-6xl">
          Seu concorrente<br />
          <span className="gold-text">já está online.</span>
          <br />E você?
        </h2>

        <p className="relative mx-auto mt-6 max-w-lg text-white/60">
          Comece hoje e transforme cada visita em um pedido. É rápido, é simples e o
          resultado aparece já na primeira semana.
        </p>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href={waLink('Olá! Quero começar agora com a Qiara Delivery.')}
          target="_blank"
          rel="noopener"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-gold-grad px-10 py-4 text-base font-bold text-ink shadow-gold-lg"
        >
          COMEÇAR AGORA <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </section>
  )
}
