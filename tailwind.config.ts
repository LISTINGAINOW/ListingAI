import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          from: { boxShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6' },
          to: { boxShadow: '0 0 20px #3b82f6, 0 0 30px #3b82f6' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px #8b5cf6' },
          '50%': { opacity: '0.8', boxShadow: '0 0 20px #3b82f6' }
        }
      }
    },
  },
  plugins: [],
}
export default config