export const AppTheme = {
  colors: {
    background: '#0a0a0a',
    surface: '#161616',
    text: '#FFFFFF',
    textWhite: '#FFFFFF',
    textGray: '#8E8E93',
    btnDark: '#262626',
    btnOperator: '#FF9500',
    btnEqual: '#34C759',
    btnText: '#FFFFFF',
    border: '#2C2C2E',
  },
};

export type ThemeColor = keyof typeof AppTheme.colors;