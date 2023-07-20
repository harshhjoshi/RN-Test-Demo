import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';

interface ImageContaintProps {
    styles: ImageStyle; // The type for styles prop is ImageStyle
    src: ImageSourcePropType; // The type for src prop is ImageSourcePropType
  }
  const ImageContaint: React.FC<ImageContaintProps> = ({ styles, src })=> {
  return <Image style={styles} resizeMode="contain" source={src} />;
};

export default ImageContaint;
