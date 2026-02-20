/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4338ca', // Indigo 700 - Deep Magic Blue
                secondary: '#64748b', // Slate 500
                accent: '#0ea5e9', // Sky 500 - Light Blue
                warning: '#eab308', // Yellow 500
                dark: '#0f172a',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scroll': 'scroll 20s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
