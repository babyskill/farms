import { Colors } from './types'

export const baseColors = {
  failure: '#ed4b9e',
  primary: '#00fa9a',
  primaryBright: 'rgba(0,250,154,0.55)',
  primaryDark: '#f1e9bf',
  secondary: '#00fa9a',
  success: '#31D0AA',
  warning: '#FFB237',
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  ...baseColors,
  ...brandColors,
  background: '#333633',
  backgroundDisabled: '#333833',
  backgroundAlt: '#333',
  contrast: '#191326',
  invertedContrast: '#f1e9bf',
  input: '#474b47',
  tertiary: 'rgba(0,250,154,0.7)',
  text: '#e0ffe0',
  textDisabled: '#BDC2C4',
  textSubtle: '#00fa9a',
  borderColor: '#E9EAEB',
  card: '#222222',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: '#333633',
  backgroundDisabled: '#333833',
  backgroundAlt: '#333',
  contrast: '#191326',
  invertedContrast: '#f1e9bf',
  input: '#474b47',
  tertiary: 'rgba(0,250,154,0.7)',
  text: '#e0ffe0',
  textDisabled: '#BDC2C4',
  textSubtle: '#00fa9a',
  borderColor: '#E9EAEB',
  card: '#222222',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
  },
}
