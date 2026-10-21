import { StyleSheet, View } from 'react-native';
import { Display } from '../components/Display';
import { RejillaBotones } from '../components/RejillaBotones';
import { AppTheme } from '../constants/theme';

export default function CalculatorScreen() {
  return (
    <View style={styles.container}>
      <Display />
      <RejillaBotones />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.colors.background,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});