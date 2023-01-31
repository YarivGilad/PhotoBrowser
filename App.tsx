import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {generatePhotosIDs} from './src/api/picsum.api';
import PhotoGrid from './src/components/PhotoGrid';
import {PhotoID} from './src/types';

export default function App() {
  const [photos, setPhotos] = useState<PhotoID[]>([]);
  const page = useRef(1);
  // const [page, setPage] = useState(1);

  const loadPhotos = () => {
    // setPage(page + 1);
    page.current++;
    // setPhotos([...photos, ...generatePhotosIDs(page.current)]);
    setPhotos(photosIDs => [...photosIDs, ...generatePhotosIDs(page.current)]);
    // setPhotos(photosIDs => [...photosIDs, ...generatePhotosIDs(page)]);
  };

  useEffect(() => {
    setPhotos(generatePhotosIDs(page.current));

    // setPhotos([...photos, ...generatePhotosIDs(page.current)]);
    // setPhotos(photosIDs => [...photosIDs, ...generatePhotosIDs(page.current)]);
    // loadPhotos();

    // setPhotos(generatePhotosIDs(page));

    // setPage(p => {
    //   setPhotos(generatePhotosIDs(p));
    //   return p;
    // });

    // setPage(p => {
    //   setPhotos(generatePhotosIDs(p));
    //   return p;
    // });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Photo Browser</Text>
      <PhotoGrid numColumns={3} photos={photos} onEndReached={loadPhotos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    margin: 10,
    fontWeight: '700',
    color: 'royalblue',
  },
});
