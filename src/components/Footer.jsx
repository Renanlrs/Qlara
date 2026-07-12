import { Instagram, MessageCircle, LifeBuoy, Shield, Mail } from 'lucide-react'
import Logo from './Logo'
import { WHATS } from '../brand'

const cols = [
  {
    title: 'Empresa',
    links: [
      { label: 'Contato', href: '#contato', icon: Mail },
      { label: 'Suporte', href: WHATS, icon: LifeBuoy },
      { label: 'Privacidade', href: '#', icon: Shield },
    ],
  },
  {
    title: 'Redes',
    links: [
      { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
      { label: 'WhatsApp', href: WHATS, icon: MessageCircle },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row">
        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex items-center gap-3">
            <Logo size={48} />
            <span className="font-heading text-lg font-bold gold-text">Qiara Delivery</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            A plataforma inteligente que faz seu delivery vender mais, todos os dias.
          </p>
        </div>

        {/* Link columns */}
        <div className="flex gap-16">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-heading text-sm font-semibold text-white">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => {
                  const Icon = l.icon
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener"
                        className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
                      >
                        <Icon size={15} /> {l.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © 2026 Qiara Delivery · Todos os direitos reservados.
      </div>
    </footer>
  )
}
