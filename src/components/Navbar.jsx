import { motion } from 'motion/react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import { WHATS, waLink } from '../brand'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Plataforma', href: `${import.meta.env.BASE_URL}plataforma.html` },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`glass flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-shadow duration-300 ${
          scrolled ? 'shadow-glass' : ''
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 pl-1">
          <Logo size={54} />
          <span className="font-heading text-lg font-bold gold-text">Qiara Delivery</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href={WHATS}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/80 transition-all hover:border-gold/50 hover:text-gold"
          >
            <MessageCircle size={18} />
          </a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="hidden rounded-full bg-gold-grad px-5 py-2.5 text-sm font-semibold text-ink shadow-gold transition-shadow hover:shadow-gold-lg sm:block"
          >
            COMEÇAR AGORA
          </motion.a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong absolute top-20 left-4 right-4 rounded-3xl p-6 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-white/80 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
