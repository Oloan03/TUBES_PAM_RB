import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import NEWS_API_KEY from './config';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${NEWS_API_KEY}`);
      const json = await response.json();
      setNews(json.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchText}&apiKey=${NEWS_API_KEY}`);
      const json = await response.json();
      setNews(json.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.newsItem} onPress={() => navigation.navigate('NewsDetail', { url: item.url })}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDescription}>{item.description}</Text>
      <Text style={styles.newsAuthor}>{item.author}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.sidebarButton}>
          <MaterialCommunityIcons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Berita Terbaru</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <AntDesign name="setting" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari berita"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        style={styles.newsList}
      />
      <TouchableOpacity style={styles.refreshButton} onPress={fetchNews}>
        <Text style={styles.refreshText}>Muat ulang</Text>
      </TouchableOpacity>
    </View>
  );
}

function NewsDetailScreen({ route }) {
  const { url } = route.params;

  return (
    <WebView source={{ uri: url }} />
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
      </Stack.Navigator>
  );
}

export default AppStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  sidebarButton: {
    marginRight: 16,
  },
  settingsButton: {
    marginLeft: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  newsList: {
    paddingHorizontal: 16,
  },
  newsItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  newsAuthor: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  refreshButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingvertical: 16,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9',
  },
  refreshText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});