import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import faculties from '../data/faculties';

export default function FacultyScreen({ navigation }) {
  return (
    <FlatList
      data={faculties}
      keyExtractor={item => item.name}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Choose Your Faculty</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.88}
          onPress={() => navigation.navigate('Courses', { faculty: item })}
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="domain" size={28} color="#60A5FA" />
          </View>
          <Text style={styles.facultyName}>{item.name}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  header: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.8,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: '#000000',
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
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: 'rgba(96, 165, 250, 0.18)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  facultyName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F1F5F9',
    flex: 1,
  },
});