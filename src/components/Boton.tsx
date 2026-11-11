import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotonProps {
  label: string;
  onPress: () => void;
  type?: 'number' | 'operator' | 'scientific' | 'equals' | 'clear';
}

export const Boton = ({ label, onPress, type = 'number' }: BotonProps) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'operator': return styles.operatorButton;
      case 'equals': return styles.equalsButton;
      case 'clear': return styles.clearButton;
      case 'scientific': return styles.scientificButton;
      default: return styles.numberButton;
    }
  };

  return (
    <TouchableOpacity style={[styles.button, getButtonStyle()]} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 4,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  numberButton: {
    backgroundColor: '#1E293B',
  },
  operatorButton: {
    backgroundColor: '#334155',
  },
  scientificButton: {
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
  },
  equalsButton: {
    backgroundColor: '#0D9488',
  },
  clearButton: {
    backgroundColor: '#EF4444',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});