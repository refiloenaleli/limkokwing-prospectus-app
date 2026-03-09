import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { allCourses } from '../data/faculties';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const filtered = query
    ? allCourses.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <ScrollView 
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Search Courses</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter course name..."
        placeholderTextColor="#94A3B8"
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('Course', { course: item })}
          >
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.faculty}>{item.faculty}</Text>
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
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#111827',
    color: '#F1F5F9',
    padding: 18,
    borderRadius: 16,
    marginBottom: 28,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  card: {
    backgroundColor: '#111827',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  courseName: {
    fontSize: 19,
    fontWeight: '600',
    color: '#F1F5F9',
    marginBottom: 6,
  },
  faculty: {
    fontSize: 14,
    color: '#94A3B8',
  },
});