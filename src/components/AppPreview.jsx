import { motion } from 'motion/react'
import { Search, ShoppingBag, Star, Plus } from 'lucide-react'

const B = import.meta.env.BASE_URL

const dishes = [
  { name: 'Smash Burger Duplo', price: 'R$ 32,90', tag: '🔥 Mais pedido', img: 'burger.jpg' },
  { name: 'Pizza Margherita', price: 'R$ 49,90', tag: '⭐ 4.9', img: 'pizza.jpg' },
  { name: 'Combinado Sushi', price: 'R$ 89,90', tag: '💰 Oferta', img: 'sushi.jpg' },
]

export default function AppPreview() {
  return (
    <section id="planos" className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28">
      {/* glow behind phone */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px]" />

      <div className="mb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl font-bold text-white md:text-5xl"
        >
          Seu app. Sua marca.<br /><span className="gold-text">Seus clientes.</span>
        </motion.h2>
      </div>

      {/* iPhone mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-[300px]"
      >
        <div className="animate-float">
          {/* Titanium frame */}
          <div className="relative rounded-[3rem] border-[6px] border-[#2a2a2a] bg-[#0d0d0d] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.7),0_0_60px_rgba(248,197,72,0.15)]">
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-4 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

            {/* Screen */}
            <div className="relative h-[600px] overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-[#141414] to-[#080808]">
              {/* Glass reflection */}
              <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />

              {/* App header */}
              <div className="px-5 pt-14">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">Entregar em</p>
                    <p className="text-sm font-semibold text-white">Rua das Flores, 128</p>
                  </div>
                  <div className="relative grid h-9 w-9 place-items-center rounded-full bg-white/10">
                    <ShoppingBag size={16} className="text-gold" />
                    <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[9px] font-bold text-ink">
                      3
                    </span>
                  </div>
                </div>

                {/* Search */}
                <div className="mt-4 flex items-center gap-2 rounded-full bg-white/8 px-4 py-2.5">
                  <Search size={15} className="text-white/50" />
                  <span className="text-xs text-white/40">Buscar pratos...</span>
                </div>
              </div>

              {/* Hero banner */}
              <div className="mx-5 mt-4 rounded-2xl bg-gold-grad p-4 text-ink">
                <p className="text-[10px] font-semibold uppercase tracking-wide">Oferta do dia</p>
                <p className="font-heading text-lg font-bold">30% OFF no primeiro pedido</p>
              </div>

              {/* Dish list */}
              <div className="mt-5 space-y-3 px-5">
                {dishes.map((d) => (
                  <div key={d.name} className="flex items-center gap-3 rounded-2xl bg-white/6 p-3">
                    <img
                      src={`${B}food/${d.img}`}
                      alt={d.name}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{d.name}</p>
                      <p className="text-[10px] text-white/50">{d.tag}</p>
                      <p className="mt-1 text-sm font-bold text-gold">{d.price}</p>
                    </div>
                    <button className="grid h-8 w-8 place-items-center rounded-full bg-gold-grad text-ink">
                      <Plus size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between rounded-full bg-gold-grad px-5 py-3 text-ink">
                <span className="flex items-center gap-1 text-sm font-bold">
                  <Star size={14} className="fill-ink" /> 3 itens
                </span>
                <span className="text-sm font-bold">Finalizar · R$ 115,70</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
