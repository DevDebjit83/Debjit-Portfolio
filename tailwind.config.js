/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                charcoal: '#0a0a0a',
                'electric-blue': '#2563eb',
                'emerald-green': '#10b981',
            },
            fontFamily: {
                sans: ['var(--font-vt323)', 'monospace'],
                mono: ['var(--font-jetbrains-mono)'],
            },
        },
    },
    plugins: [],
}
