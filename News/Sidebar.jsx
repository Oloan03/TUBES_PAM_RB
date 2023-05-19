// Sidebar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BookmarkScreen from './BookmarkScreen';
import AccountScreen from './AccountScreen';
import SettingsScreen from './SettingsScreen';

const Sidebar = ({ onClose }) => {
  const navigation = useNavigation();

  const goToBookmark = () => {
    navigation.navigate('Bookmark');
  };

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  const handleAccountPress = () => {
    navigation.navigate('Account');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/LogoApk.png')} style={styles.logoImage} />
      </View>
      <TouchableOpacity onPress={goToBookmark} style={styles.button}>
        <Ionicons name="bookmark" size={24} color="black" />
        <Text style={styles.buttonText}>Bookmark</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSettings} style={styles.button}>
        <Ionicons name="settings" size={24} color="black" />
        <Text style={styles.buttonText}>Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAccountPress} style={styles.button}>
        <Ionicons name="person" size={24} color="black" />
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// ...
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 40,
      paddingHorizontal: 20,
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      left: 20,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    logoImage: {
      width: 150,
      height: 150,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      marginLeft: 10,
      fontSize: 16,
    },
  });
  
  export default Sidebar;
  