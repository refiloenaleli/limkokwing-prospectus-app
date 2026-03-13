import React, { useState, useRef } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet, FlatList,
  Dimensions, Modal, Animated, ScrollView, TextInput, Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import faculties from '../data/faculties';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [inquiryVisible, setInquiryVisible] = useState(false);
  const [form, setForm] = useState({ name: '', surname: '', email: '', message: '' });
  const slideAnim = useRef(new Animated.Value(-width * 0.7)).current;

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -width * 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  const handleInquirySubmit = () => {
    Alert.alert('Inquiry Sent', `Thank you ${form.name} ${form.surname}. We will respond to ${form.email} soon.`);
    setInquiryVisible(false);
    setForm({ name: '', surname: '', email: '', message: '' });
  };

  const renderFacultyItem = ({ item }) => (
    <TouchableOpacity
      style={styles.facultyCard}
      onPress={() => navigation.navigate('Courses', { faculty: item })}
    >
      <Image source={item.facultyImage} style={styles.facultyImage} />
      <Text style={styles.facultyName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <MaterialCommunityIcons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.searchButton}>
          <MaterialCommunityIcons name="magnify" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Modal transparent visible={menuVisible} animationType="none">
        <TouchableOpacity style={styles.modalOverlay} onPress={closeMenu}>
          <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>Menu</Text>
            </View>
            <TouchableOpacity style={styles.menuItem} onPress={() => { closeMenu(); navigation.navigate('Help'); }}>
              <MaterialCommunityIcons name="help-circle" size={24} color="#22D3EE" />
              <Text style={styles.menuItemText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { closeMenu(); setInquiryVisible(true); }}>
              <MaterialCommunityIcons name="chat" size={24} color="#F59E0B" />
              <Text style={styles.menuItemText}>Inquiries</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={inquiryVisible} transparent animationType="slide">
        <View style={styles.modalCenterOverlay}>
          <View style={styles.inquiryModal}>
            <Text style={styles.inquiryTitle}>Contact Us</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor={Colors.textSecondary}
              value={form.name}
              onChangeText={(text) => setForm({...form, name: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Surname"
              placeholderTextColor={Colors.textSecondary}
              value={form.surname}
              onChangeText={(text) => setForm({...form, surname: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={Colors.textSecondary}
              keyboardType="email-address"
              value={form.email}
              onChangeText={(text) => setForm({...form, email: text})}
            />
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Message"
              placeholderTextColor={Colors.textSecondary}
              multiline
              numberOfLines={4}
              value={form.message}
              onChangeText={(text) => setForm({...form, message: text})}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.modalButton, {backgroundColor: Colors.primary}]} onPress={handleInquirySubmit}>
                <Text style={styles.modalButtonText}>Send</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, {backgroundColor: Colors.border}]} onPress={() => setInquiryVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=600' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Limkokwing Prospectus</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Faculties</Text>
        <FlatList
          data={faculties}
          renderItem={renderFacultyItem}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />

        <View style={styles.featureRow}>
          <TouchableOpacity
            style={[styles.featureButton, { backgroundColor: Colors.secondary }]}
            onPress={() => navigation.navigate('Faculty')}
          >
            <MaterialCommunityIcons name="school" size={32} color="#fff" />
            <Text style={styles.featureText}>View Faculty</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.featureButton, { backgroundColor: Colors.primary }]}
            onPress={() => navigation.navigate('Quiz')}
          >
            <MaterialCommunityIcons name="head-question" size={32} color="#fff" />
            <Text style={styles.featureText}>Career Quiz</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: Colors.card,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sideMenu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '70%',
    backgroundColor: Colors.card,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  menuHeader: {
    marginBottom: 30,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuItemText: {
    fontSize: 18,
    color: Colors.textPrimary,
    marginLeft: 15,
  },
  modalCenterOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inquiryModal: {
    width: '85%',
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inquiryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: Colors.background,
    color: Colors.textPrimary,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  heroContainer: {
    height: 250,
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 15,
  },
  categoryList: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  facultyCard: {
    width: 120,
    marginRight: 15,
    borderRadius: 12,
    backgroundColor: Colors.card,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  facultyImage: {
    width: '100%',
    height: 100,
  },
  facultyName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
    textAlign: 'center',
    padding: 8,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  featureButton: {
    width: '45%',
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  featureText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 12,
    textAlign: 'center',
  },
});