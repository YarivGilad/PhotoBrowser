import React from 'react';
import {FlatList, Image, useWindowDimensions} from 'react-native';
import {formatPhotoUri} from '../api/picsum.api';
import {PhotoID} from '../types';

interface IProps {
  photos: PhotoID[];
  numColumns: number;
  onEndReached: () => void;
}
export default function PhotoGrid({photos, numColumns, onEndReached}: IProps) {
  const {width} = useWindowDimensions();

  const size = width / numColumns;

  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({item}) => (
        <Image
          source={{
            width: size,
            height: size,
            uri: formatPhotoUri(item.id, size, size),
          }}
        />
      )}
    />
  );
}

/**
import FastImage from 'react-native-fast-image';

<FastImage
    style={{width: size, height: size}}
    source={{
      uri: formatPhotoUri(item.id, size, size),
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />

On M1 laptops you may encounter some issues after installing FastImage
and running pod install
try these commands if you do

sudo arch -x86_64 gem install ffi
arch -x86_64 pod install

 */
