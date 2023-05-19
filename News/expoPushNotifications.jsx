// expoPushNotifications.js

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

// Fungsi untuk mengaktifkan notifikasi
export const registerForPushNotificationsAsync = async () => {
  // Memeriksa izin notifikasi
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  // Jika izin belum diberikan, meminta izin notifikasi
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Jika izin tidak diberikan, mengembalikan false
  if (finalStatus !== 'granted') {
    return false;
  }

  // Mendapatkan Expo Push Token perangkat
  const tokenData = await Notifications.getExpoPushTokenAsync();
  const token = tokenData.data;

  // Menggunakan Expo Push Token untuk mengatur langganan notifikasi ke server Anda
  // Implementasikan langganan notifikasi ke server Anda di sini
  // ...

  return true; // Mengembalikan true jika notifikasi diaktifkan
};

// Fungsi untuk menghentikan langganan notifikasi
export const unregisterForPushNotificationsAsync = async () => {
  // Menghentikan langganan notifikasi dari server Anda
  // Implementasikan penghentian langganan notifikasi dari server Anda di sini
  // ...

  // Menghapus Expo Push Token
  await Notifications.setBadgeCountAsync(0); // Mengatur jumlah badge ke 0
  await Notifications.setDevicePushTokenAsync(null);

  return true; // Mengembalikan true jika notifikasi dinonaktifkan
};
