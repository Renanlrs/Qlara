import { motion } from 'motion/react'

const B = import.meta.env.BASE_URL

const dishes = [
  { img: 'burger.jpg', label: 'Hambúrguer', tag: 'Artesanal' },
  { img: 'pizza.jpg', label: 'Pizzaria', tag: 'Fornada' },
  { img: 'sushi.jpg', label: 'Japonês', tag: 'Combinados' },
  { img: 'bowl.jpg', label: 'Saudável', tag: 'Bowls & açaí' },
  { img: 'dessert.jpg', label: 'Sobremesas', tag: 'Doces' },
  { img: 'drink.jpg', label: 'Bebidas', tag: 'Drinks & sucos' },
]

export default function FoodShowcase() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs font-medium text-gold"
        >
          CARDÁPIO
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl font-bold text-white md:text-5xl"
        >
          De qualquer cozinha, <span className="gold-text">mais pedidos.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-white/60"
        >
          Hambúrguer, pizza, japonês, saudável ou doces — seu cardápio dá água na boca
          e vende sozinho no Q'lara.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {dishes.map((d, i) => (
          <motion.div
            key={d.img}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src={`${B}food/${d.img}`}
              alt={d.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-gold">{d.tag}</span>
              <h3 className="font-heading text-lg font-bold text-white">{d.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
