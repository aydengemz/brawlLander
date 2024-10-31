module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lilita One', 'system-ui', 'sans-serif'], // Brawl Stars uses Lilita One
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ring: "hsl(var(--ring))",
        brawl: {
          purple: {
            light: '#9C6FF2',
            DEFAULT: '#8A4FE0',
            dark: '#6E3FC4',
          },
          blue: {
            light: '#5BB3F9',
            DEFAULT: '#3E96E8',
            dark: '#2C7AC9',
          },
          yellow: {
            light: '#FFD74E',
            DEFAULT: '#FFC107',
            dark: '#E5AC00',
          },
        },
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        lg: '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(168, 85, 247, 0.4)',
      },
    },
  },
}