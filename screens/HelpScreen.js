import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/colors';

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>How to Use the App</Text>
      <Text style={styles.paragraph}>
        Welcome to the Limkokwing Prospectus app! This app helps you explore faculties and courses offered by Limkokwing University.
      </Text>
      <Text style={styles.subtitle}>Navigating the App</Text>
      <Text style={styles.paragraph}>
        • On the Home screen, you'll find a hero image, horizontal faculty cards, and two feature buttons.
        {'\n'}• Tap the menu icon (top-left) to open the side panel with Help and Inquiries.
        {'\n'}• Tap the search icon (top-right) to search for courses by name.
        {'\n'}• In the Faculties section, tap any faculty card to see its courses.
        {'\n'}• On a course screen, you can watch a video, read the description, view skills and careers, and rate the course (up to 6 stars). Use the "Clear Rating" button to reset.
        {'\n'}• The Career Quiz asks five questions and suggests a course based on your answers.
      </Text>
      <Text style={styles.subtitle}>Need Help?</Text>
      <Text style={styles.paragraph}>
        If you have any questions or feedback, use the Inquiries form in the menu to contact us.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    marginBottom: 15,
  },
});