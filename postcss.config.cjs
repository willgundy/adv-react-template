const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// eslint-disable-next-line no-undef
module.exports = {
    plugins: [tailwindcss('./tailwind.config.cjs'), autoprefixer],
};


