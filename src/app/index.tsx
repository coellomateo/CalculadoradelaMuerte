import { SafeAreaView, StyleSheet } from 'react-native';
import { Display } from '../components/Display';
import { LuffyHeader } from '../components/LuffyHeader';
import { RejillaBotones } from '../components/RejillaBotones';
import { useCalculator } from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const calculator = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <LuffyHeader />
      <Display value={calculator.display} history={calculator.expression} />
      
      <RejillaBotones
        onInputDigit={calculator.inputDigit}
        onInputDecimal={calculator.inputDecimal}
        onPerformOperation={calculator.performOperation}
        onClearAll={calculator.clearAll}
        onClearEntry={calculator.clearEntry}
        onBackspace={calculator.backspace}
        onHandleEqual={calculator.handleEqual}
        onHandleScientific={calculator.handleScientific}
        onToggleSign={calculator.toggleSign}
        onHandlePercent={calculator.handlePercent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    justifyContent: 'flex-end',
    padding: 16,
  },
});