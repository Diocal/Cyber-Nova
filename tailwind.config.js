module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Asegúrate de que Tailwind busca en la carpeta correcta
  ],
  theme: {
    extend: {
      colors: {
        'purple-800': '#6D28D9',
        'purple-500': '#8B5CF6',
        'green-500': '#10B981',
      },
    },
  },
  plugins: [],
};
