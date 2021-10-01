import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from '../../../tailwind';

const functionsSet = new Set();

export default function LoginScreen() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const tambah1 = () => {
    // console.log('tambah 1');
    setCounter1(counter1 + 1);
  };

  const kurang1 = () => {
    // console.log('kurang 1');
    setCounter1(counter1 - 1);
  };

  const tambah2 = () => {
    // console.log('tambah 2');
    setCounter2(counter2 + 1);
  };

  const kurang2 = () => {
    // console.log('kurang 2');
    setCounter2(counter2 - 1);
  };

  useEffect(() => {
    console.log('updated');
  }, [counter1]);

  return (
    <View style={tw.style('bg-red-600')}>
      <Text>LoginScreen</Text>

      <Icon name="user" style={tw.style('text-yellow-400')} />
      <Text>{counter1}</Text>
      <Text>{counter2}</Text>
      <Button title="tambah" onPress={tambah1} />
      <Button title="tambah2" onPress={tambah2} />
    </View>
  );
}
