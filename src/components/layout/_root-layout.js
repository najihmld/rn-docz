import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

export default function RootLayout({ children }) {
  return (
    <SafeAreaView style={{ display: 'flex', flex: 1 }}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
