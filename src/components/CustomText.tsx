import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { AppTheme } from '../constants/theme';

interface Props extends TextProps {
  variant?: 'big' | 'small';
}

export const CustomText = ({ children, style, variant = 'big', ...rest }: Props) => {
  return (
    <Text
      style={[
        styles.baseText,
        variant === 'big' && styles.bigText,
        variant === 'small' && styles.smallText,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    color: AppTheme.colors.textPrimary,
  },
  bigText: {
    fontSize: 65,
    fontWeight: '500',
  },
  smallText: {
    color: AppTheme.colors.textSecondary,
    fontSize: 28,
  },
});