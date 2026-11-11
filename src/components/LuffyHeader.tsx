import { StyleSheet, Text, View } from 'react-native';

export function LuffyHeader() {
  return (
    <View style={styles.pirateContainer}>
      <View style={styles.badgeContainer}>
        <Text style={styles.jollyRoger}>🏴‍☠️</Text>
        <View>
          <Text style={styles.headerTitle}>STRAW HAT CREW</Text>
          <Text style={styles.headerSubtitle}>Monkey D. Luffy • Pirate King's Calc</Text>
        </View>
        <Text style={styles.jollyRoger}>👒</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pirateContainer: {
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#EAB308', // Dorado tesoro
    shadowColor: '#EAB308',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  jollyRoger: {
    fontSize: 24,
    marginHorizontal: 8,
  },
  headerTitle: {
    color: '#FACC15',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#94A3B8',
    fontSize: 10,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});