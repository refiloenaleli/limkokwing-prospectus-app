import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';
import faculties from '../data/faculties';

const questions = [
  'Do you enjoy technology, coding and computers?',
  'Are you interested in travel, hospitality and tourism?',
  'Do you like business, management and entrepreneurship?',
  'Are media, communication and broadcasting appealing to you?',
  'Do you have passion for design, creativity and multimedia?',
];

export default function QuizScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState([0, 0, 0, 0, 0]);

  const answer = (yes) => {
    if (yes) {
      const newScores = [...scores];
      newScores[index]++;
      setScores(newScores);
    }

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      const max = Math.max(...scores);
      const facultyIdx = scores.indexOf(max);
      const suggested = faculties[facultyIdx].courses[0];
      navigation.navigate('Course', { course: suggested });
    }
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Career Guide Quiz</Text>
        <Text style={styles.question}>{questions[index]}</Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.success }]}
          activeOpacity={0.85}
          onPress={() => answer(true)}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.accent }]}
          activeOpacity={0.85}
          onPress={() => answer(false)}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    paddingBottom: 80,
  },
  inner: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 60,
  },
  question: {
    fontSize: 22,
    textAlign: 'center',
    color: Colors.textPrimary,
    marginBottom: 60,
    paddingHorizontal: 20,
    lineHeight: 32,
  },
  button: {
    width: '80%',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});