import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Boton } from './Boton';

interface RejillaBotonesProps {
  onPressNumber: (num: string) => void;
  onPressOperator: (op: string) => void;
  onPressClear: () => void;
  onPressClearEntry: () => void;
  onPressBackspace: () => void;
  onPressEquals: () => void;
  onPressDecimal: () => void;
  onPressScientific: (func: string) => void;
  onPressSign: () => void;
  onPressPercent: () => void;
}

export const RejillaBotones = ({
  onPressNumber,
  onPressOperator,
  onPressClear,
  onPressClearEntry,
  onPressBackspace,
  onPressEquals,
  onPressDecimal,
  onPressScientific,
  onPressSign,
  onPressPercent,
}: RejillaBotonesProps) => {
  return (
    <View style={styles.grid}>
      {/* Fila adicional para conservar los paréntesis solicitados */}
      <View style={styles.row}>
        <Boton label="(" onPress={() => onPressScientific('(')} type="scientific" />
        <Boton label=")" onPress={() => onPressScientific(')')} type="scientific" />
      </View>

      {/* Fila 1: %, CE, C, ⌫ */}
      <View style={styles.row}>
        <Boton label="%" onPress={onPressPercent} type="scientific" />
        <Boton label="CE" onPress={onPressClearEntry} type="clear" />
        <Boton label="C" onPress={onPressClear} type="clear" />
        <Boton label="⌫" onPress={onPressBackspace} type="clear" />
      </View>

      {/* Fila 2: 1/x, x², ²√x, ÷ */}
      <View style={styles.row}>
        <Boton label="1/x" onPress={() => onPressScientific('reciprocal')} type="scientific" />
        <Boton label="x²" onPress={() => onPressScientific('square')} type="scientific" />
        <Boton label="²√x" onPress={() => onPressScientific('sqrt')} type="scientific" />
        <Boton label="÷" onPress={() => onPressOperator('÷')} type="operator" />
      </View>

      {/* Fila 3: 7, 8, 9, × */}
      <View style={styles.row}>
        <Boton label="7" onPress={() => onPressNumber('7')} />
        <Boton label="8" onPress={() => onPressNumber('8')} />
        <Boton label="9" onPress={() => onPressNumber('9')} />
        <Boton label="×" onPress={() => onPressOperator('×')} type="operator" />
      </View>

      {/* Fila 4: 4, 5, 6, - */}
      <View style={styles.row}>
        <Boton label="4" onPress={() => onPressNumber('4')} />
        <Boton label="5" onPress={() => onPressNumber('5')} />
        <Boton label="6" onPress={() => onPressNumber('6')} />
        <Boton label="-" onPress={() => onPressOperator('-')} type="operator" />
      </View>

      {/* Fila 5: 1, 2, 3, + */}
      <View style={styles.row}>
        <Boton label="1" onPress={() => onPressNumber('1')} />
        <Boton label="2" onPress={() => onPressNumber('2')} />
        <Boton label="3" onPress={() => onPressNumber('3')} />
        <Boton label="+" onPress={() => onPressOperator('+')} type="operator" />
      </View>

      {/* Fila 6: +/-, 0, ,, = */}
      <View style={styles.row}>
        <Boton label="+/-" onPress={onPressSign} type="scientific" />
        <Boton label="0" onPress={() => onPressNumber('0')} />
        <Boton label="," onPress={onPressDecimal} />
        <Boton label="=" onPress={onPressEquals} type="equals" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
});