import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface DisplayProps {
  value: string;
  history?: string;
}

export const Display = ({ value, history }: DisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.historyText} numberOfLines={1}>
        {history}
      </Text>
      <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#EAB308',
    padding: 16,
    marginBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    minHeight: 100,
  },
  historyText: {
    color: '#94A3B8',
    fontSize: 18,
    marginBottom: 4,
  },
  displayText: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
  },
});