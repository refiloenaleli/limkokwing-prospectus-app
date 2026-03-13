import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
  Alert, ActivityIndicator, ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { useVideoPlayer, VideoView } from 'expo-video';

const getSkills = (courseName) => {
  if (courseName.includes('Information Technology') && !courseName.includes('Business')) 
    return ['Networking', 'Database Management', 'Cybersecurity', 'Programming', 'IT Support'];
  if (courseName.includes('Software Engineering')) 
    return ['Coding', 'System Design', 'Multimedia', 'Testing', 'Project Management'];
  if (courseName.includes('Business Information Technology')) 
    return ['Business Analysis', 'IT Strategy', 'Data Analytics', 'E-commerce', 'Project Management'];
  if (courseName.includes('Multimedia and Software Engineering')) 
    return ['Coding', 'Animation', 'Web Design', 'Multimedia Tools', 'Software Testing'];
  if (courseName.includes('Tourism Management')) 
    return ['Destination Marketing', 'Tour Planning', 'Customer Service', 'Cultural Awareness', 'Sustainable Tourism'];
  if (courseName.includes('Hotel Management')) 
    return ['Front Office Operations', 'Housekeeping', 'Food & Beverage', 'Event Coordination', 'Hospitality Law'];
  if (courseName.includes('Events Management')) 
    return ['Event Planning', 'Budgeting', 'Vendor Management', 'Marketing', 'Risk Management'];
  if (courseName.includes('International Tourism')) 
    return ['Global Tourism Trends', 'Cross-cultural Communication', 'Travel Operations', 'Tourism Policy', 'Eco-tourism'];
  if (courseName.includes('International Business')) 
    return ['Global Trade', 'International Finance', 'Cross-cultural Management', 'Export/Import', 'Foreign Policy'];
  if (courseName.includes('Entrepreneurship')) 
    return ['Business Planning', 'Funding', 'Innovation', 'Marketing', 'Leadership'];
  if (courseName.includes('Human Resource Management')) 
    return ['Recruitment', 'Employee Relations', 'Training', 'Performance Management', 'Labor Law'];
  if (courseName.includes('Business Management')) 
    return ['Strategic Planning', 'Operations', 'Marketing', 'Finance', 'Leadership'];
  if (courseName.includes('Retail Management')) 
    return ['Merchandising', 'Inventory Control', 'Sales', 'Customer Experience', 'Retail Analytics'];
  if (courseName.includes('Broadcasting & Journalism')) 
    return ['News Writing', 'Media Ethics', 'Broadcasting', 'Interviewing', 'Digital Media'];
  if (courseName.includes('Professional Communication')) 
    return ['Corporate Communication', 'Public Speaking', 'Digital Media', 'Crisis Communication', 'Branding'];
  if (courseName.includes('Television & Film Production')) 
    return ['Scriptwriting', 'Directing', 'Editing', 'Cinematography', 'Post-production'];
  if (courseName.includes('Public Relations')) 
    return ['PR Strategies', 'Media Relations', 'Branding', 'Crisis Communication', 'Event Management'];
  if (courseName.includes('Journalism & Media Studies')) 
    return ['Reporting', 'Writing', 'Media Law', 'Ethics', 'Digital Journalism'];
  if (courseName.includes('Graphic Design')) 
    return ['Typography', 'Branding', 'Illustration', 'UI/UX', 'Print Design'];
  if (courseName.includes('Fashion & Retailing')) 
    return ['Textile Science', 'Fashion Illustration', 'Trend Forecasting', 'Merchandising', 'Pattern Making'];
  if (courseName.includes('Creative Advertising')) 
    return ['Copywriting', 'Campaign Strategy', 'Art Direction', 'Market Research', 'Media Planning'];
  if (courseName.includes('Multimedia Design')) 
    return ['Animation', 'Interactive Media', 'Video Editing', 'Web Design', '3D Modeling'];
  return ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];
};

const getCareers = (courseName) => {
  if (courseName.includes('Information Technology') && !courseName.includes('Business')) 
    return ['IT Manager', 'Network Administrator', 'Database Administrator', 'Cybersecurity Analyst', 'Help Desk Specialist'];
  if (courseName.includes('Software Engineering')) 
    return ['Software Engineer', 'Web Developer', 'Game Designer', 'IT Consultant', 'System Analyst'];
  if (courseName.includes('Business Information Technology')) 
    return ['IT Consultant', 'Business Analyst', 'Systems Analyst', 'Project Manager', 'E-commerce Manager'];
  if (courseName.includes('Multimedia and Software Engineering')) 
    return ['Multimedia Developer', 'Software Engineer', 'Web Designer', 'Game Tester', 'App Developer'];
  if (courseName.includes('Tourism Management')) 
    return ['Tourism Officer', 'Travel Consultant', 'Destination Manager', 'Tour Guide', 'Event Coordinator'];
  if (courseName.includes('Hotel Management')) 
    return ['Hotel Manager', 'Front Office Manager', 'Food & Beverage Director', 'Concierge', 'Event Planner'];
  if (courseName.includes('Events Management')) 
    return ['Event Coordinator', 'Wedding Planner', 'Conference Manager', 'Exhibition Organizer', 'Festival Manager'];
  if (courseName.includes('International Tourism')) 
    return ['International Tour Guide', 'Travel Agency Manager', 'Tour Operator', 'Cultural Advisor', 'Sustainable Tourism Specialist'];
  if (courseName.includes('International Business')) 
    return ['International Business Manager', 'Export/Import Specialist', 'Global Marketing Manager', 'Trade Analyst', 'Foreign Affairs Officer'];
  if (courseName.includes('Entrepreneurship')) 
    return ['Business Owner', 'Startup Founder', 'Business Consultant', 'Innovation Manager', 'Venture Capitalist'];
  if (courseName.includes('Human Resource Management')) 
    return ['HR Manager', 'Recruiter', 'Training Specialist', 'Compensation Analyst', 'Employee Relations Manager'];
  if (courseName.includes('Business Management')) 
    return ['Business Manager', 'Operations Manager', 'Management Consultant', 'Project Manager', 'General Manager'];
  if (courseName.includes('Retail Management')) 
    return ['Store Manager', 'Retail Buyer', 'Merchandiser', 'Regional Manager', 'E-commerce Manager'];
  if (courseName.includes('Broadcasting & Journalism')) 
    return ['Journalist', 'News Anchor', 'Reporter', 'Broadcast Producer', 'Content Creator'];
  if (courseName.includes('Professional Communication')) 
    return ['PR Specialist', 'Corporate Communicator', 'Social Media Manager', 'Marketing Coordinator', 'Publicist'];
  if (courseName.includes('Television & Film Production')) 
    return ['Film Director', 'Producer', 'Editor', 'Cinematographer', 'Scriptwriter'];
  if (courseName.includes('Public Relations')) 
    return ['PR Manager', 'Media Relations Specialist', 'Brand Strategist', 'Crisis Manager', 'Event Coordinator'];
  if (courseName.includes('Journalism & Media Studies')) 
    return ['Reporter', 'Editor', 'Digital Journalist', 'Media Analyst', 'Content Writer'];
  if (courseName.includes('Graphic Design')) 
    return ['Graphic Designer', 'Art Director', 'UI/UX Designer', 'Brand Specialist', 'Illustrator'];
  if (courseName.includes('Fashion & Retailing')) 
    return ['Fashion Designer', 'Merchandiser', 'Stylist', 'Retail Buyer', 'Fashion Marketer'];
  if (courseName.includes('Creative Advertising')) 
    return ['Creative Director', 'Copywriter', 'Art Director', 'Advertising Manager', 'Media Planner'];
  if (courseName.includes('Multimedia Design')) 
    return ['Multimedia Designer', 'Animator', 'Video Editor', 'Web Designer', 'Motion Graphics Artist'];
  return ['Career 1', 'Career 2', 'Career 3', 'Career 4', 'Career 5'];
};

export default function CourseScreen({ route }) {
  const { course } = route.params;
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const videoSource = course.video?.uri ? course.video : { uri: course.video };

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
  });

  useEffect(() => {
    let interval;

    const startPlayback = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        player.play();
      } catch (err) {
        console.log('Video play failed:', err);
      }
    };

    startPlayback();

    interval = setInterval(() => {
      if (player.status === 'readyToPlay' || player.status === 'playing') {
        setIsLoading(false);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [videoSource, player]);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(`rating_${course.name}`);
        if (stored) setRating(parseInt(stored, 10));
      } catch (err) {
        console.log('Error loading rating:', err);
      }
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
    } catch (err) {
      console.log('Error saving rating:', err);
    }
  };

  const handleClearRating = async () => {
    setRating(0);
    try {
      await AsyncStorage.removeItem(`rating_${course.name}`);
    } catch (err) {
      console.log('Error clearing rating:', err);
    }
  };

  const skills = getSkills(course.name);
  const careers = getCareers(course.name);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroContainer}>
        <Image source={course.image} style={styles.heroImage} />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>{course.name}</Text>
          <Text style={styles.heroTagline}>Design the spaces where people live, work, and dream.</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="calendar" size={24} color={Colors.primary} />
          <Text style={styles.infoText}>3 years</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="graduation-cap" size={24} color={Colors.secondary} />
          <Text style={styles.infoText}>Bachelor's</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="office-building" size={24} color={Colors.accent} />
          <Text style={styles.infoText}>Full-time</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="map-marker" size={24} color={Colors.success} />
          <Text style={styles.infoText}>On campus</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>About the Program</Text>
        <Text style={styles.description}>{course.description}</Text>
      </View>

      <View style={styles.videoCard}>
        <Text style={styles.cardTitle}>Watch the {course.name} Experience</Text>
        <View style={styles.videoContainer}>
          {isLoading && (
            <ActivityIndicator size="large" color={Colors.accent} style={styles.loader} />
          )}
          <VideoView
            player={player}
            style={styles.video}
            allowsFullscreen
            allowsPictureInPicture
            nativeControls={true}
            contentFit="cover"
            posterSource={course.image}
            posterResizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>What You Will Learn</Text>
        <View style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <MaterialCommunityIcons name="check-circle" size={20} color={Colors.success} />
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Career Opportunities</Text>
        {careers.map((career, index) => (
          <View key={index} style={styles.careerItem}>
            <MaterialCommunityIcons name="briefcase" size={20} color={Colors.primary} />
            <Text style={styles.careerText}>{career}</Text>
          </View>
        ))}
      </View>

      <View style={styles.ratingCard}>
        <Text style={styles.ratingDisplay}>Rating: {rating} / 6</Text>
        <View style={styles.stars}>
          {[...Array(6)].map((_, i) => (
            <Ionicons
              key={i}
              name={i < rating ? 'star' : 'star-outline'}
              size={34}
              color={i < rating ? Colors.success : Colors.border}
              style={{ marginHorizontal: 4 }}
            />
          ))}
        </View>
        <View style={styles.ratingButtons}>
          <TouchableOpacity style={[styles.rateButton, {backgroundColor: Colors.accent}]} onPress={handleRate}>
            <Text style={styles.rateText}>Rate Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.rateButton, {backgroundColor: Colors.border}]} onPress={handleClearRating}>
            <Text style={styles.rateText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flex: 1, backgroundColor: Colors.background },
  scrollContent: { paddingBottom: 30 },
  heroContainer: {
    height: 280,
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    padding: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  heroTagline: {
    fontSize: 16,
    color: '#ddd',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.card,
    paddingVertical: 15,
    marginTop: -20,
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoText: {
    color: Colors.textPrimary,
    marginTop: 4,
    fontSize: 12,
  },
  card: {
    backgroundColor: Colors.card,
    margin: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  videoCard: {
    backgroundColor: Colors.card,
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  videoContainer: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
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
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 12,
  },
  skillText: {
    color: Colors.textSecondary,
    marginLeft: 8,
    fontSize: 14,
  },
  careerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  careerText: {
    color: Colors.textSecondary,
    marginLeft: 10,
    fontSize: 16,
  },
  ratingCard: {
    backgroundColor: Colors.card,
    margin: 20,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  ratingDisplay: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  ratingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  rateButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  rateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});