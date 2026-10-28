import { StyleSheet, View } from 'react-native';
import { AppTheme } from '../constants/theme';
import { CustomText } from './CustomText';

export const Display = () => {
  return (
    <View style={styles.displayContainer}>
      {/* Texto secundario de arriba */}
      <CustomText variant="small"></CustomText>
      
      {/* Texto principal grande (sin el 15=) */}
      <CustomText 
        variant="big"
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        0
      </CustomText>

      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 15,
  },
  divider: {
    height: 1.5,
    width: '100%',
    backgroundColor: AppTheme.colors.divider,
    marginTop: 20,
  },
});