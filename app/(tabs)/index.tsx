import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { HelloWave } from '@/components/hello-wave';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.card}>
        <ThemedView style={styles.headerContainer}>
          <ThemedText type="title" style={styles.titleText}>Hello there!</ThemedText>
          <HelloWave />
        </ThemedView>

        <View style={styles.divider} />

        <ThemedText style={styles.messageText}>
          Hi, I'm <ThemedText type="defaultSemiBold" style={styles.highlightText}>Goodness Aregbesola</ThemedText>.
        </ThemedText>
        
        <ThemedText style={styles.subtitleText}>
          Welcome to my app 🚀
        </ThemedText>
        
        <View style={styles.badgeContainer}>
          <ThemedText style={styles.badgeText}>Ready to build something awesome?</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(150, 150, 150, 0.1)',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
    backgroundColor: 'transparent',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '800',
  },
  divider: {
    width: 60,
    height: 4,
    backgroundColor: '#0a7ea4',
    borderRadius: 2,
    marginBottom: 24,
  },
  messageText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 32,
  },
  highlightText: {
    fontSize: 22,
    color: '#0a7ea4',
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 32,
  },
  badgeContainer: {
    backgroundColor: 'rgba(10, 126, 164, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(10, 126, 164, 0.3)',
  },
  badgeText: {
    color: '#0a7ea4',
    fontWeight: '600',
    fontSize: 14,
  },
});
