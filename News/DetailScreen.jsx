import React from 'react';
import { View, Text, StyleSheet, ScrollView, WebView, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  const [bookmark, setBookmark] = React.useState([]);
  const saveToBookmark = () => {
    setBookmark([...bookmark, item]);
    alert('Berita berhasil disimpan ke bookmark')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>By {item.author}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </ScrollView>
      <TouchableOpacity onPress={saveToBookmark} style={styles.bookmarkButton}>
        <Icon name="bookmark" size={24} color="black" />
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
