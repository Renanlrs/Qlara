import { motion } from 'motion/react'
import {
  Smartphone, Truck, CreditCard, MapPin, LineChart, Bot,
  Target, Heart, Bell, Package, BarChart3, Settings,
} from 'lucide-react'

const services = [
  { icon: Smartphone, title: 'Cardápio Digital', desc: 'Menu online lindo, rápido e sempre atualizado.' },
  { icon: Truck, title: 'Delivery Completo', desc: 'Gestão de entregas do pedido até a porta do cliente.' },
  { icon: CreditCard, title: 'PIX Automático', desc: 'Receba na hora, sem intermediários e sem taxas altas.' },
  { icon: MapPin, title: 'Rastreamento do Pedido', desc: 'Seu cliente acompanha cada etapa em tempo real.' },
  { icon: LineChart, title: 'Dashboard de Vendas', desc: 'Todos os números do seu negócio em um só lugar.' },
  { icon: Bot, title: 'Atendimento IA', desc: 'Inteligência artificial que atende e vende por você.' },
  { icon: Target, title: 'Marketing Inteligente', desc: 'Campanhas que trazem mais clientes todos os dias.' },
  { icon: Heart, title: 'Programa Fidelidade', desc: 'Recompense clientes e faça eles voltarem sempre.' },
  { icon: Bell, title: 'Notificações Push', desc: 'Avise promoções e novidades direto no celular.' },
  { icon: Package, title: 'Controle de Pedidos', desc: 'Organize toda a operação sem perder nenhum pedido.' },
  { icon: BarChart3, title: 'Relatórios', desc: 'Insights claros para decidir com segurança.' },
  { icon: Settings, title: 'Painel Administrativo', desc: 'Controle total do seu negócio na palma da mão.' },
]

export default function Services() {
  return (
    <section id="recursos" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs font-medium text-gold"
        >
          RECURSOS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl font-bold text-white md:text-5xl"
        >
          Tudo em uma <span className="gold-text">única plataforma.</span>
        </motion.h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass group rounded-3xl p-6 transition-shadow duration-300 hover:border-gold/40 hover:shadow-gold"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gold-grad text-ink shadow-gold transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
