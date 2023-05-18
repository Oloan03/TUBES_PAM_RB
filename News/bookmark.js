import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

interface ImageData {
  id: string;
  source: any;
}

const data: ImageData[] = [
  { id: '1', source: require('./images/image1.jpg') },
  { id: '2', source: require('./images/image1.jpg') },
  { id: '3', source: require('./images/image1.jpg') },
  // 
];

const page: React.FC = () => {
  const [showGallery, setShowGallery] = useState(true);

  const handleBackButton = () => {
    setShowGallery(true);
  };

  const renderImageItem = ({ item }: { item: ImageData }) => {
    return <Image style={styles.image} source={item.source} />;
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Text style={styles.buttonText}>{'< Back'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Bookmark</Text>
        <View style={{ flex: 1 }} />
      </View>
    );
  };

  const renderContent = () => {
    if (showGallery) {
      return (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderImageItem}
          contentContainerStyle={styles.flatlistContainer}
        />
      );
    } else {

      return (
        <View style={styles.contentContainer}>
          <Text>Konten lainnya</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderContent()}
    </View>
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
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: 'white',
    
  },
  backButton: {
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flatlistContainer: {
    flexGrow: 1,
  },
  image: {
    width: 500,
    height: 100,
    margin: 5,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default page;
