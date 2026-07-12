# Qiara Delivery — Landing Page

Landing page premium para a **Qiara Delivery**, plataforma inteligente para delivery (cardápio digital, pedidos online, marketing e atendimento com IA).

Design nível Apple + Stripe + Framer + Linear: dark + dourado (`#F8C548`), glassmorphism, tipografia Outfit/Inter, animações cinematográficas com Motion.

## Stack
- **Vite** + **React 18**
- **Tailwind CSS**
- **Motion** (`motion/react`)
- **Lucide React**

## Rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
```

## Estrutura
```
src/
  App.jsx
  brand.js            # WhatsApp + link do vídeo do hero
  components/
    Navbar, Hero, Benefits, Services, AppPreview, CTA, Footer, Logo
```

## Personalizar
- **Mascote oficial:** solte o arquivo em `public/qiara-mascot.png` — o componente `Logo` usa automaticamente (com fallback dourado enquanto não estiver lá).
- **Vídeo do hero:** editar `HERO_VIDEO` em `src/brand.js`.
- **WhatsApp:** editar `WHATS` em `src/brand.js` (atual: `5519988013439`).

---
© 2026 Qiara Delivery · Todos os direitos reservados.
