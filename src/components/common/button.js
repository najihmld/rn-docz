import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import tw from '../../../tailwind';

export default function Button({ title, onPress }) {
  return (
    <View style={tw.style('h-12 w-20 rounded bg-purple-500')} onPress={onPress}>
      <Text>{title}</Text>
    </View>
  );
}

Button.propTypes = {
  /**
   * mantap
   */
  title: PropTypes.string,
  /**
   * okkk
   */
  onPress: PropTypes.func,
};
