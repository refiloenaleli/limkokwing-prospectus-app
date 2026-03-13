import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { allCourses } from '../data/faculties';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const filtered = query
    ? allCourses.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <FlatList
      data={filtered}
      keyExtractor={item => item.name}
      ListHeaderComponent={
        <>
          <Text style={styles.title}>Search Courses</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter course name..."
            placeholderTextColor={Colors.textSecondary}
            value={query}
            onChangeText={setQuery}
          />
        </>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Course', { course: item })}
        >
          <Text style={styles.courseName}>{item.name}</Text>
          <Text style={styles.faculty}>{item.faculty}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: Colors.card,
    color: Colors.textPrimary,
    padding: 18,
    borderRadius: 16,
    marginBottom: 28,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  card: {
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  courseName: {
    fontSize: 19,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  faculty: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});