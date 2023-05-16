import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SettingsScreen({ onBack }) {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [mode, setMode] = useState(isDarkMode ? 'dark' : 'light');

  const goBack = () => {
    onBack();
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  const toggleNotifications = () => {
    // implementasi untuk mengubah status notifikasi
  };

  const goToAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60 }}>
        /*
        <TouchableOpacity style={{ position: 'absolute', left: 10 }} onPress={goBack}>
          <Image source={require('../assets/arrow.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        */

        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>SETTINGS</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        /*
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Image source={require('../assets/mode.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        */
        <Text style={{ marginRight: 'auto' }}>Mode</Text>
        <Switch value={mode === 'dark'} onValueChange={toggleMode} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        /*
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Image source={require('../assets/notif.png')} style={{ width: 24, height: 24}} />
        </TouchableOpacity>
        */
        <Text style={{ marginRight: 'auto' }}>Notifications</Text>
        <Switch value={false} onValueChange={toggleNotifications} />
      </View>

      <TouchableOpacity style={{ marginTop: 10 }} onPress={goToAbout}>
        <Text style={{ color: '#007AFF' }}>About app</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingsScreen;
