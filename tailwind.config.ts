import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-root': '#000000',
        'grey-root': '#7A7B80',
        'snow-root': '#FFFCFF',
        'aureolin-root': '#F1EA19',
        'citrine-root': '#D3CC00',
        'engine-orange-root': '#D60808',
      },
      backgroundImage: {
        'blog-logo': "url('/git_blog/blog_logo.png')",
        'coffee-logo': "url('/coffee/coffee_logo.png')",
        'hallo-logo': "url('/halloween/hallo_logo.png')",
      },
      keyframes: {
        waveDown: {
          '0%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(88px)' },
        },
        waveUp: {
          '0%': { transform: 'translateY(50px)' },
          '100%': { transform: 'translateY(-88px)' },
        },
      },
      animation: {
        'waving-hand-down': 'waveDown 2s linear infinite',
        'waving-hand-up': 'waveUp 2s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
