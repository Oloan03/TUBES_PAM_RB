import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const BookmarkScreen = ({ bookmarkedNews }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmarked News</Text>
      {bookmarkedNews.length > 0 ? (
        <FlatList
          data={bookmarkedNews}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={styles.newsContainer}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsAuthor}>By {item.author}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>No bookmarked news</Text>
      )}
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
  newsContainer: {
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsAuthor: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BookmarkScreen;
