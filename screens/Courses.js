import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Courses({ route, navigation }) {
  const { faculty } = route.params;

  return (
    <ScrollView 
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.header}>{faculty.name}</Text>

      <FlatList
        data={faculty.courses}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('Course', { course: item })}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="book-education" size={26} color="#60A5FA" />
            </View>
            <Text style={styles.courseName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 32,
    letterSpacing: 0.6,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: 'rgba(96, 165, 250, 0.18)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },
  courseName: {
    fontSize: 19,
    fontWeight: '600',
    color: '#F1F5F9',
    flex: 1,
  },
});