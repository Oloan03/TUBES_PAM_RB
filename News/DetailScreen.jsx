import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const toggleBookmark = () => {
    if (bookmarkedItems.find((bookmark) => bookmark.title === item.title)) {
      // Hapus item dari daftar bookmark jika sudah ada
      setBookmarkedItems(bookmarkedItems.filter((bookmark) => bookmark.title !== item.title));
    } else {
      // Tambahkan item ke daftar bookmark jika belum ada
      setBookmarkedItems([...bookmarkedItems, item]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>By {item.author}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.source}>Sumber: {item.source.name}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </ScrollView>
      <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkButton}>
        <Icon name="bookmark" size={24} color={bookmarkedItems.find((bookmark) => bookmark.title === item.title) ? 'red' : 'black'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  source: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  bookmarkButton: {
    backgroundColor: '#0080ff',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default DetailScreen;
