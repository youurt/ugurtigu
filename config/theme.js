export const theme = {
  colors: {
    base: '#1f1f24',
    contrast: '#fdfcfe',
    green: 'rgb(0, 68, 69)',
    blue: 'rgb(57, 103, 131)',
    red: 'rgb(150, 53, 60)',
    purple: 'rgb(50, 41, 60)',
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
