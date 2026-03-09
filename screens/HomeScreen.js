import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Animated, 
  Alert,
  ScrollView 
} from 'react-native';
import { Colors } from '../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Accelerometer } from 'expo-sensors';

export default function HomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const sub = Accelerometer.addListener(({ x, y, z }) => {
      if (Math.sqrt(x*x + y*y + z*z) > 2.8) {
        Alert.alert('Shake Detected!', 'Be the Best!');
      }
    });
    Accelerometer.setUpdateInterval(800);

    return () => sub.remove();
  }, []);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View style={[styles.innerContainer, { opacity: fadeAnim }]}>
        {/* Header - centered at top */}
        <View style={styles.headerArea}>
          <Text style={styles.mainTitle}>LIMKOKWING PROSPECTUS</Text>
          <Text style={styles.subtitle}>Discover Your Future</Text>
        </View>

        {/* Logo - centered */}
        <Image 
          source={require('../assets/images/icon.png')} 
          style={styles.logo} 
        />

        {/* Buttons - centered */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.bigButton, { backgroundColor: Colors.primary }]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Faculty')}
          >
            <MaterialCommunityIcons name="school" size={32} color="#fff" />
            <Text style={styles.bigButtonText}>View All Faculties</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bigButton, { backgroundColor: Colors.secondary }]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Quiz')}
          >
            <MaterialCommunityIcons name="head-question" size={32} color="#fff" />
            <Text style={styles.bigButtonText}>Career Guide Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bigButton, { backgroundColor: Colors.accent }]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Search')}
          >
            <MaterialCommunityIcons name="magnify" size={32} color="#fff" />
            <Text style={styles.bigButtonText}>Search Courses</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000000', // pure black background
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headerArea: {
    alignItems: 'center',
    marginBottom: 40,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#CBD5E1', // light gray for contrast
    textAlign: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 28,
    marginVertical: 40,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  bigButton: {
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },
  bigButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 16,
  },
});