import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Display } from '@/components/Display';
import { RejillaBotones } from '@/components/RejillaBotones';
import { LuffyHeader } from '@/components/LuffyHeader';
import { useCalculator } from '@/hooks/useCalculator';

export default function CalculatorScreen() {
  const {
    display,
    expression,
    inputDigit,
    inputDecimal,
    performOperation,
    clearAll,
    clearEntry,
    backspace,
    handleEqual,
    handleScientific,
    toggleSign,
    handlePercent,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <LuffyHeader />

      <View style={styles.calculatorContainer}>
        <Display value={display} history={expression} />
        
        <RejillaBotones
          onPressNumber={inputDigit}
          onPressOperator={performOperation}
          onPressClear={clearAll}
          onPressClearEntry={clearEntry}
          onPressBackspace={backspace}
          onPressEquals={handleEqual}
          onPressDecimal={inputDecimal}
          onPressScientific={handleScientific}
          onPressSign={toggleSign}
          onPressPercent={handlePercent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  calculatorContainer: {
    padding: 12,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
});