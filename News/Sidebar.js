import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
  
const Sidebar = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  
  };

  const handleSetting = () => {
    setIsSettingOpen(!isSettingOpen);
  };

  return (
    <View style={styles.container}>
      <Icon name="bars" size={20} color="black" />
  <Image
          source={require('assets/LOGO_APK-removebg-preview 1.png')}
          style={styles.title}
        />
      <View style={styles.header}>
 
      
        <Image
          source={require('assets/User-100.png')}
          style={styles.logo}
        />
      
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.item} onPress={handleBookmark}>
          <Icon
            name={isBookmarked ? 'bookmark' : 'bookmark-o'}
            size={20}
            color={isBookmarked ? 'red' : 'black'}
          />
          <Text style={styles.itemText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleSetting}>
          <Icon name="gear" size={20} color="black" />
          <Text style={styles.itemText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Icon name="user-circle-o" size={20} color="black" />
          <Text style={styles.itemText}>Account</Text>
        </TouchableOpacity>
      </View>
      {isSettingOpen && (
        <View style={styles.settingContainer}>
          <Text>Setting 1</Text>
          <Text>Setting 2</Text>
          <Text>Setting 3</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRightWidth: 1,
    borderRightColor: '#DDD',
  },
  header: {
    backgroundColor: 'F8D6D6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
  },
  settingContainer: {
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 200,
    marginBottom: 50,
  },
});

export default Sidebar;
