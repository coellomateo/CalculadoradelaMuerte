import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface BotonProps {
  text: string;
  onPress: () => void;
  type?: 'number' | 'operator' | 'action' | 'equal';
  style?: ViewStyle;
}

export function Boton({ text, onPress, type = 'number', style }: BotonProps) {
  const getButtonStyle = () => {
    switch (type) {
      case 'operator': return { bg: '#B45309', border: '#F59E0B' }; // Naranja oro pirata
      case 'equal': return { bg: '#DC2626', border: '#EF4444' };    // Rojo Akuma no Mi
      case 'action': return { bg: '#334155', border: '#475569' };    // Gris acero naval
      default: return { bg: '#1E293B', border: '#334155' };          // Fondo oscuro clásico
    }
  };

  const currentStyle = getButtonStyle();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: currentStyle.bg, borderColor: currentStyle.border }, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, type === 'equal' && styles.equalText]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    aspectRatio: 1,
    maxHeight: 68,
    margin: 4,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    elevation: 4,
  },
  buttonText: {
    color: '#F8FAFC',
    fontSize: 22,
    fontWeight: '600',
  },
  equalText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 26,
  },
});