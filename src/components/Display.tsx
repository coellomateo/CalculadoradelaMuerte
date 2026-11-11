import { StyleSheet, Text, View } from 'react-native';

interface DisplayProps {
  value: string;
  history: string;
}

export function Display({ value, history }: DisplayProps) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.historyText} numberOfLines={1}>
        {history}
      </Text>
      <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    minHeight: 120,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
  },
  historyText: { color: '#888', fontSize: 18 },
  displayText: { color: '#fff', fontSize: 48, fontWeight: 'bold' },
});