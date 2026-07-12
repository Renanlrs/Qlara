/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F8C548',
        'gold-accent': '#E6A800',
        ink: '#080808',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, #F8C548 0%, #E6A800 100%)',
      },
      boxShadow: {
        gold: '0 10px 40px rgba(248, 197, 72, 0.35)',
        'gold-lg': '0 20px 60px rgba(248, 197, 72, 0.45)',
        glass: '0 20px 60px rgba(0,0,0,0.45)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
}
