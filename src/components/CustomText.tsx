import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { AppTheme } from '../constants/theme';

interface Props extends TextProps {
  variant?: 'big' | 'medium' | 'small' | 'button';
}

export const CustomText = ({ variant = 'small', style, children, ...rest }: Props) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'big':
        return styles.textBig;
      case 'medium':
        return styles.textMedium;
      case 'button':
        return styles.textButton;
      case 'small':
    default:
        return styles.textSmall;
    }
  };

  return (
    <Text style={[styles.base, getVariantStyle(), style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: AppTheme.colors.textWhite,
  },
  textBig: {
    fontSize: 64,
    fontWeight: '300',
  },
  textMedium: {
    fontSize: 40,
    fontWeight: '300',
  },
  textSmall: {
    fontSize: 24,
    color: AppTheme.colors.textGray,
  },
  textButton: {
    fontSize: 28,
    fontWeight: '400',
  },
});