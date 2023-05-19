import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Sidebar from './Sidebar';
import SettingsScreen from './SettingsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { setData, setLoading, setSidebarOpen, setSearchQuery, setRefreshing } from './store';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, loading, sidebarOpen, searchQuery, refreshing } = useSelector((state) => state);

  const screenWidth = Dimensions.get('window').width;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=id&apiKey=a914f6db85534d6694561c436ea763cf`
      );
      const json = await response.json();
      dispatch(setData(json.articles));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = async () => {
    dispatch(setRefreshing(true));
    await fetchData();
    dispatch(setRefreshing(false));
  };

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    dispatch(setData(filteredData));
  };

  const toggleSidebar = () => {
    dispatch(setSidebarOpen(!sidebarOpen));
  };

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PAM NEWS</Text>
        <TouchableOpacity onPress={goToSettings}>
          <MaterialIcons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search news"
            value={searchQuery}
            onChangeText={(text) => dispatch(setSearchQuery(text))}
            onSubmitEditing={handleSearch}
          />
          <Ionicons name="search" size={24} color="black" />
        </View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.newsItem,
                { width: screenWidth - 40, marginLeft: index === 0 ? 20 : 0 },
              ]}
              onPress={() => navigation.navigate('Detail', { item })}
            >
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      {sidebarOpen && (
        <View style={styles.sidebarContainer}>
          <Sidebar onClose={toggleSidebar} />
        </View>
      )}
      <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
        <Ionicons name="refresh" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    fontSize: 16,
  },
  newsItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
  },
  refreshButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
});

export default HomeScreen;
