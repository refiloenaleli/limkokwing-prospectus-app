import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  ActivityIndicator,
  ScrollView 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function CourseScreen({ route }) {
  const { course } = route.params;
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const player = useVideoPlayer(course.video, (player) => {
    player.loop = true;
    player.muted = true;
  });

  useEffect(() => {
    let interval;

    const startPlayback = async () => {
      try {
        // Small delay often fixes Android black-screen-on-first-load
        await new Promise(resolve => setTimeout(resolve, 400));
        player.play();
      } catch (err) {
        console.log('Play failed:', err);
      }
    };

    startPlayback();

    // Poll status – most reliable for local bundled videos on Android
    interval = setInterval(() => {
      if (player.status === 'readyToPlay' || player.status === 'playing') {
        setIsLoading(false);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      // IMPORTANT: Do NOT call player.pause() or player.unload() here
      // → causes "already released" crash on Android when navigating away
    };
  }, [course.video, player]);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(`rating_${course.name}`);
        if (stored) setRating(parseInt(stored, 10));
      } catch {}
    })();
  }, [course.name]);

  const handleRate = async () => {
    if (rating >= 6) {
      Alert.alert('Maximum Reached', 'Rating cannot exceed 6.');
      return;
    }
    const newR = rating + 1;
    setRating(newR);
    try {
      await AsyncStorage.setItem(`rating_${course.name}`, newR.toString());
    } catch {}
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.innerContainer}>
        <Image source={course.image} style={styles.mainImage} resizeMode="cover" />

        <Text style={styles.courseTitle}>{course.name}</Text>
        <Text style={styles.description}>{course.description}</Text>

        <View style={styles.videoContainer}>
          {isLoading && (
            <ActivityIndicator 
              size="large" 
              color="#60A5FA" 
              style={styles.loader} 
            />
          )}

          <VideoView
            player={player}
            style={styles.video}
            allowsFullscreen
            allowsPictureInPicture
            nativeControls={true}
            contentFit="cover"               // Important for Android scaling
            posterSource={course.image}      // Shows course image until video ready
            posterResizeMode="cover"
          />
        </View>

        <View style={styles.ratingSection}>
          <Text style={styles.ratingDisplay}>Rating: {rating} / 6</Text>

          <View style={styles.stars}>
            {[...Array(6)].map((_, i) => (
              <Ionicons
                key={i}
                name={i < rating ? 'star' : 'star-outline'}
                size={34}
                color={i < rating ? Colors.success : '#94A3B8'}
                style={{ marginHorizontal: 6 }}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.rateButton} onPress={handleRate}>
            <Text style={styles.rateText}>Rate Up</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  innerContainer: {
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: 240,
    borderRadius: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  courseTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F1F5F9',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#CBD5E1',
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 36,
    paddingHorizontal: 12,
  },
  videoContainer: {
    width: '100%',
    height: 240,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 40,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
  },
  ratingSection: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 28,
    backgroundColor: '#0F172A',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  ratingDisplay: {
    fontSize: 22,
    fontWeight: '600',
    color: '#E2E8F0',
    marginBottom: 20,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  rateButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  rateText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});