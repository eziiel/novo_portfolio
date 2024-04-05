import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blog-logo': "url('/git_blog/blog_logo.png')",
        'coffee-logo': "url('/coffee/coffee_logo.png')",
        'hallo-logo': "url('/halloween/hallo_logo.png')",
      },
    },
  },
  plugins: [],
}
export default config
