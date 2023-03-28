/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['ui-sans-serif', 'system-ui'],
                'serif': ['ui-serif', 'Georgia'],
                'mono': ['ui-monospace', 'SFMono-Regular'],
                'display': ['Oswald'],
                'jetbrain': ['JetBrains Mono'],
                'body': ['Open Sans'],
                'corben': ['Corben'],
                'red-hat': ['Red Hat Display', 'sans-serif'],
            },
        },
    },
    plugins: [],
}