import { StyleSheet, View } from 'react-native';
import { Boton } from './Boton';

interface RejillaBotonesProps {
  onInputDigit: (digit: string) => void;
  onInputDecimal: () => void;
  onPerformOperation: (op: string) => void;
  onClearAll: () => void;
  onClearEntry: () => void;
  onBackspace: () => void;
  onHandleEqual: () => void;
  onHandleScientific: (func: string) => void;
  onToggleSign: () => void;
  onHandlePercent: () => void;
}

export function RejillaBotones({
  onInputDigit,
  onInputDecimal,
  onPerformOperation,
  onClearAll,
  onClearEntry,
  onBackspace,
  onHandleEqual,
  onHandleScientific,
  onToggleSign,
  onHandlePercent,
}: RejillaBotonesProps) {
  return (
    <View style={styles.keypadContainer}>
      {/* Fila 1: %, CE, C, ⌫ */}
      <View style={styles.row}>
        <Boton text="%" onPress={onHandlePercent} type="action" />
        <Boton text="CE" onPress={onClearEntry} type="action" />
        <Boton text="C" onPress={onClearAll} type="action" />
        <Boton text="⌫" onPress={onBackspace} type="action" />
      </View>

      {/* Fila 2: 1/x, x², ²√x, División */}
      <View style={styles.row}>
        <Boton text="1/x" onPress={() => onHandleScientific('reciprocal')} type="action" />
        <Boton text="x²" onPress={() => onHandleScientific('square')} type="action" />
        <Boton text="²√x" onPress={() => onHandleScientific('sqrt')} type="action" />
        <Boton text="÷" onPress={() => onPerformOperation('÷')} type="operator" />
      </View>

      {/* Fila 3: 7, 8, 9, Multiplicación */}
      <View style={styles.row}>
        <Boton text="7" onPress={() => onInputDigit('7')} />
        <Boton text="8" onPress={() => onInputDigit('8')} />
        <Boton text="9" onPress={() => onInputDigit('9')} />
        <Boton text="×" onPress={() => onPerformOperation('×')} type="operator" />
      </View>

      {/* Fila 4: 4, 5, 6, Resta */}
      <View style={styles.row}>
        <Boton text="4" onPress={() => onInputDigit('4')} />
        <Boton text="5" onPress={() => onInputDigit('5')} />
        <Boton text="6" onPress={() => onInputDigit('6')} />
        <Boton text="-" onPress={() => onPerformOperation('-')} type="operator" />
      </View>

      {/* Fila 5: 1, 2, 3, Suma */}
      <View style={styles.row}>
        <Boton text="1" onPress={() => onInputDigit('1')} />
        <Boton text="2" onPress={() => onInputDigit('2')} />
        <Boton text="3" onPress={() => onInputDigit('3')} />
        <Boton text="+" onPress={() => onPerformOperation('+')} type="operator" />
      </View>

      {/* Fila 6: ±, 0, Coma, Igual */}
      <View style={styles.row}>
        <Boton text="±" onPress={onToggleSign} />
        <Boton text="0" onPress={() => onInputDigit('0')} />
        <Boton text="," onPress={onInputDecimal} />
        <Boton text="=" onPress={onHandleEqual} type="equal" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keypadContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});