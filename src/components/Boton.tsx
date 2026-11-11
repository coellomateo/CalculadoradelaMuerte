import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotonProps {
  text: string;
  onPress: () => void;
  type?: 'number' | 'operator' | 'action' | 'equal';
  colorFondo?: string;
  colorTexto?: string; 
}

export function Boton({ text, onPress, type = 'number', colorFondo, colorTexto }: BotonProps) {
  const getButtonStyle = () => {
    switch (type) {
      case 'operator': return styles.btnOp;
      case 'action': return styles.btnAction;
      case 'equal': return styles.btnEqual;
      default: return styles.btnNum;
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'operator': return styles.btnTextOp;
      case 'action': return styles.btnTextRed;
      case 'equal': return styles.btnTextEqual;
      default: return styles.btnText;
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        getButtonStyle(), 
        colorFondo ? { backgroundColor: colorFondo } : null
      ]} 
      onPress={onPress} 
      activeOpacity={0.7}
    >
      {/* <--- 2. Añades colorTexto aquí en el estilo del texto */}
      <Text style={[getTextStyle(), colorTexto ? { color: colorTexto } : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    aspectRatio: 1,
    maxHeight: 68,
    margin: 4,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNum: { backgroundColor: '#202024' },
  btnOp: { backgroundColor: '#29292e' },
  btnAction: { backgroundColor: '#323238' },
  btnEqual: { backgroundColor: '#00b37e' },
  btnText: { color: '#fff', fontSize: 22, fontWeight: '600' },
  btnTextOp: { color: '#00b37e', fontSize: 22, fontWeight: 'bold' },
  btnTextRed: { color: '#f75a68', fontSize: 18, fontWeight: 'bold' },
  btnTextEqual: { color: '#fff', fontSize: 26, fontWeight: 'bold' },
});