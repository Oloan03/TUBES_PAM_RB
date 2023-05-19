import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { registerForPushNotificationsAsync, unregisterForPushNotificationsAsync } from './expoPushNotifications';
import { Ionicons } from '@expo/vector-icons';

function SettingsScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [mode, setMode] = useState(isDarkMode ? 'dark' : 'light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  const toggleNotifications = async () => {
    if (notificationsEnabled) {
      // Menghentikan langganan notifikasi
      await unregisterForPushNotificationsAsync();
    } else {
      // Mengaktifkan notifikasi
      const result = await registerForPushNotificationsAsync();
      if (!result) {
        // Gagal mengaktifkan notifikasi
        console.log('Failed to enable notifications.');
        return;
      }
    }
    setNotificationsEnabled(!notificationsEnabled);
  };

  const goToAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60 }}>
        <TouchableOpacity style={{ position: 'absolute', left: 10 }} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>SETTINGS</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Ionicons name="moon" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ marginRight: 'auto' }}>Mode</Text>
        <Switch value={mode === 'dark'} onValueChange={toggleMode} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ marginRight: 'auto' }}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <TouchableOpacity style={{ marginTop: 10 }} onPress={goToAbout}>
        <Text style={{ color: '#007AFF' }}>About app</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingsScreen;
