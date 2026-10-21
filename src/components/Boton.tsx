import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { CustomText } from './CustomText';
import { AppTheme } from '../constants/theme';

interface Props {
  label: string;
  type?: 'dark' | 'light' | 'cream';
  isDouble?: boolean;
  onPress?: () => void;
}

export const Boton = ({ label, type = 'dark', isDouble = false, onPress }: Props) => {
  const getBackgroundColor = () => {
    if (type === 'light') return styles.buttonLightGray;
    if (type === 'cream') return styles.buttonCream;
    return styles.buttonDarkGray;
  };

  const getTextColor = () => {
    if (type === 'light' || type === 'cream') return styles.textDark;
    return styles.textWhite;
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getBackgroundColor(),
        isDouble && styles.buttonDouble,
      ]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <CustomText style={[styles.baseText, getTextColor()]} variant="small">
        {label}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
buttonDouble: {
    width: 156, 
    borderRadius: 36,
    alignItems: 'flex-start',
    paddingLeft: 28,
  },
  buttonDarkGray: {
    backgroundColor: AppTheme.colors.btnDarkGray,
  },
  buttonLightGray: {
    backgroundColor: AppTheme.colors.btnLightGray,
  },
  buttonCream: {
    backgroundColor: AppTheme.colors.btnCream,
  },
  baseText: {
    fontSize: 26,
  },
  textWhite: {
    color: AppTheme.colors.btnTextWhite,
  },
  textDark: {
    color: AppTheme.colors.btnTextDark,
  },
});