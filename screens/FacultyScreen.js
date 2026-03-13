import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { Colors } from '../constants/colors';
import faculties from '../data/faculties';

export default function FacultyScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Courses', { faculty: item })}
    >
      <Image source={item.facultyImage} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={faculties}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      numColumns={2}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.background,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 16,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    textAlign: 'center',
    padding: 12,
  },
});