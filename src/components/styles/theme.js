const colors = {
  primary: '#24292f',
  secondary: '#f06292',
  accent: '#fab216',
  deacent: '#7c036c',
  background: '#fefefe',
  backgroundSecondary: '#2aff00',
  backgroundForm: 'rgba(255, 255, 255, 0.14)',
  headerBackground: '#f8f8f8',
  footerBackground: 'rgba(51,51,51,0.12)',
  subTitle: '#035110',
  text: '#333',
  textSecondary: '#666',
  ratingText: '#444',
  likeActive: '#f06292',
  likeInactive: '#e0e0e0',
  starActive: 'gold',
  starInactive: 'gray'
}
const shadows = {
  buttonPrimary: colors.boxShadow,
  boxShadow: '0 4px 20px 16px rgba(0,0,0,0.53)',
  boxShadowForm: '0 4px 30px rgba(0, 0, 0, 0.3);'
}

export const theme = {
  colors,
  shadows,
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  borders: {
    primary: '1px solid rgba(255, 255, 255, 0.12)'
  },
  blur: {
    standard: 'blur(5px)'
  },
  fonts: {
    primary:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  breakpoints: {
    mobile: '600px',
    desktop: '900px'
  },
  borderRadius: {
    small: '4px',
    medium: '12px',
    large: '20px'
  },
  button: {
    primary: {
      backgroundColor: colors.primary,
      color: 'azure',
      borderRadius: '20px',
      margin: '34px 0 50px',
      boxShadow: shadows.boxShadow,
      border: `2px inset ${colors.accent}`
    },
    secondary: {
      backgroundColor: colors.backgroundSecondary,
      color: 'black',
      border: 'outset',
      margin: '15px'
    }
  }
}
