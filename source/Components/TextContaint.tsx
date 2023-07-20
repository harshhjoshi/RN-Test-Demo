import React from 'react';
import {
  Text, TextStyle,
} from 'react-native';

interface TextContaintProps {
  styles: TextStyle; // The type for styles prop is TextStyle
  texts: string; // The type for texts prop is string
}

const TextContaint: React.FC<TextContaintProps> = ({ styles, texts }) => {
  return (
    <Text
      style={styles}>
      {texts}
    </Text>
  );
};

export default TextContaint;
