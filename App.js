import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from './constants/colors';  // ← ADD THIS LINE HERE

import HomeScreen from './screens/HomeScreen';
import FacultyScreen from './screens/FacultyScreen';
import Courses from './screens/Courses';
import CourseScreen from './screens/CourseScreen';
import QuizScreen from './screens/QuizScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: '600' },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Limkokwing Prospectus' }} />
          <Stack.Screen name="Faculty" component={FacultyScreen} options={{ title: 'Faculties' }} />
          <Stack.Screen name="Courses" component={Courses} options={{ title: 'Courses' }} />
          <Stack.Screen name="Course" component={CourseScreen} options={{ title: 'Course Details' }} />
          <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Career Quiz' }} />
          <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search Courses' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}