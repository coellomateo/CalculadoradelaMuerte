import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Boton } from './Boton';

export const RejillaBotones = () => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.row}>
        <Boton label="AC" type="light" />
        <Boton label="+/-" type="light" />
        <Boton label="%" type="light" />
        <Boton label="÷" type="cream" />
      </View>

      <View style={styles.row}>
        <Boton label="7" />
        <Boton label="8" />
        <Boton label="9" />
        <Boton label="×" type="cream" />
      </View>

      <View style={styles.row}>
        <Boton label="4" />
        <Boton label="5" />
        <Boton label="6" />
        <Boton label="-" type="cream" />
      </View>

      <View style={styles.row}>
        <Boton label="1" />
        <Boton label="2" />
        <Boton label="3" />
        <Boton label="+" type="cream" />
      </View>

      <View style={styles.row}>
        <Boton label="0" type="cream" isDouble />
        <Boton label="," />
        <Boton label="=" type="cream" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center', // Centra toda la rejilla en la pantalla
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribuye uniformemente los 4 botones por fila
    marginBottom: 12,
  },
});