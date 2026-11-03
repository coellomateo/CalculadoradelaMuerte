import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Boton } from './Boton';

interface RejillaBotonesProps {
  onPressNumber: (num: string) => void;
  onPressOperator: (op: string) => void;
  onPressClear: () => void;
  onPressBackspace: () => void;
  onPressEquals: () => void;
  onPressDecimal: () => void;
  onPressScientific: (func: string) => void;
}

export function RejillaBotones({
  onPressNumber,
  onPressOperator,
  onPressClear,
  onPressBackspace,
  onPressEquals,
  onPressDecimal,
  onPressScientific,
}: RejillaBotonesProps) {
  return (
    <View style={styles.grid}>
      <View style={styles.row}>
        <Boton text="C" onPress={onPressClear} type="action" />
        <Boton text="⌫" onPress={onPressBackspace} type="action" />
        <Boton text="√" onPress={() => onPressScientific('sqrt')} type="action" />
        <Boton text="1/x" onPress={() => onPressScientific('fraction')} type="action" />
      </View>

      <View style={styles.row}>
        <Boton text="x²" onPress={() => onPressScientific('square')} type="action" />
        <Boton text="%" onPress={() => onPressOperator('%')} type="action" />
        <Boton text="÷" onPress={() => onPressOperator('÷')} type="operator" />
        <Boton text="×" onPress={() => onPressOperator('×')} type="operator" />
      </View>

      <View style={styles.row}>
        <Boton text="7" onPress={() => onPressNumber('7')} />
        <Boton text="8" onPress={() => onPressNumber('8')} />
        <Boton text="9" onPress={() => onPressNumber('9')} />
        <Boton text="-" onPress={() => onPressOperator('-')} type="operator" />
      </View>

      <View style={styles.row}>
        <Boton text="4" onPress={() => onPressNumber('4')} />
        <Boton text="5" onPress={() => onPressNumber('5')} />
        <Boton text="6" onPress={() => onPressNumber('6')} />
        <Boton text="+" onPress={() => onPressOperator('+')} type="operator" />
      </View>

      <View style={styles.row}>
        <Boton text="1" onPress={() => onPressNumber('1')} />
        <Boton text="2" onPress={() => onPressNumber('2')} />
        <Boton text="3" onPress={() => onPressNumber('3')} />
        <Boton text="=" onPress={onPressEquals} type="equal" />
      </View>

      <View style={styles.row}>
        <Boton text="0" onPress={() => onPressNumber('0')} style={{ flex: 2, aspectRatio: undefined, height: 68 }} />
        <Boton text="." onPress={onPressDecimal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});