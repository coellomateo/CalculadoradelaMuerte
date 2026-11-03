import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { AppTheme } from '@/constants/theme';

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Calculadora DRAZEL</ThemedText>
      <ThemedText style={styles.subtitle}>Espacio de pruebas y diseño modular.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: AppTheme.colors.background,
  },
  subtitle: {
    marginTop: 10,
    textAlign: 'center',
    color: AppTheme.colors.textGray,
  },
});