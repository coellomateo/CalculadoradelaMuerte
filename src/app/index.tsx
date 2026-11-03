import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Display } from '@/components/Display';
import { RejillaBotones } from '@/components/RejillaBotones';
import { LuffyHeader } from '@/components/LuffyHeader';
import { useCalculator } from '@/hooks/useCalculator';

export default function CalculatorScreen() {
  const {
    displayValue,
    history,
    handleNumber,
    handleDecimal,
    handleClear,
    handleBackspace,
    handleOperator,
    handleScientific,
    handleEquals,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      {/* Insignia y diseño superior de Luffy y los Sombrero de Paja */}
      <LuffyHeader />

      <View style={styles.calculatorContainer}>
        <Display value={displayValue} history={history} />
        
        <RejillaBotones
          onPressNumber={handleNumber}
          onPressOperator={handleOperator}
          onPressClear={handleClear}
          onPressBackspace={handleBackspace}
          onPressEquals={handleEquals}
          onPressDecimal={handleDecimal}
          onPressScientific={handleScientific}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  calculatorContainer: {
    padding: 16,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
});