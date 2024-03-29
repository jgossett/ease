module.exports = {
    prefix: '',
    purge: {
      content: [
        './apps/**/*.{html,ts}',
        './libs/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
