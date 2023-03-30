export const theme = {
  colors: {
    'ugurtigu-base': '#1f1f24',
    'ugurtigu-contrast': '#fdfcfe',
  },
  fontFamily: {
    serif: ['Garamond', 'serif'],
  },
  animation: {
    intro: '1.4s down-enter cubic-bezier(.25,1,.5,1) backwards',
    'fade-in': '1.8s fade-in cubic-bezier(.25,1,.5,1) backwards;',
  },
  keyframes: {
    'down-enter': {
      '0%': { transform: 'translateY(30px)', opacity: 0 },
      '40%': { transform: 'translateY(30px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    'fade-in': {
      '0%': { opacity: 0 },
      '45%': { opacity: 0 },
      to: { opacity: 1 },
    },
  },
};
