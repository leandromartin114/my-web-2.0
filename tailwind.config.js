/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './ui/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                text: 'text 5s ease infinite',
            },
            keyframes: {
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
            backgroundImage: {
                teclado_blanco:
                    "url('https://res.cloudinary.com/deooec1tp/image/upload/v1682442445/My%20web/Teclado_blanco2_cu7nny.jpg')",
                teclado_blanco_movil:
                    "url('https://res.cloudinary.com/deooec1tp/image/upload/v1682442445/My%20web/Teclado_blanco_m%C3%B3vil_ct5bny.jpg')",
                teclado_negro:
                    "url('https://res.cloudinary.com/deooec1tp/image/upload/v1682434856/My%20web/Teclado_negro_obpffp.jpg')",
                teclado_negro_movil:
                    "url('https://res.cloudinary.com/deooec1tp/image/upload/v1682442445/My%20web/Teclado_negro_m%C3%B3vil_nyuadp.jpg')",
                taza_blanca:
                    "url('https://res.cloudinary.com/deooec1tp/image/upload/v1682434856/My%20web/Taza_blanca_a2vnwr.jpg')",
                taza_negra:
                    "url('https://res.cloudinary.com/deooec1tp/image/upload/v1682434856/My%20web/Taza_negra_mfekjk.jpg')",
            },
        },
    },
    plugins: [],
}
