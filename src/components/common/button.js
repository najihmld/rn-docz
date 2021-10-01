import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

function Button({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

Button.propTypes = {
  /**
   * This is a pretty good description for this prop.
   */
  title: PropTypes.string,
};

export default Button;
