import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DisplayProps {
  value: string;
  history: string;
}

export function Display({ value, history }: DisplayProps) {
  return (
    <View style={styles.displayContainer}>
      {/* Bitácora / Historial de operaciones */}
      <Text style={styles.historyText} numberOfLines={1}>
        {history}
      </Text>
      
      {/* Valor principal actual */}
      <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    minHeight: 120,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#0F172A',
    borderRadius: 22,
    borderWidth: 2.5,
    borderColor: '#EAB308',
    shadowColor: '#EAB308',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  historyText: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  displayText: {
    color: '#F8FAFC',
    fontSize: 48,
    fontWeight: '400',
  },
});