import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const Error = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        🤔 Hmmmmm, we couldn&apos;t find that person. 🤔
      </Text>
      <Button
        title="Return to Search"
        onPress={onPress}
        icon={{ name: 'chevron-left' }}
        backgroundColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    marginBottom: 5,
    color: '#222',
    fontSize: 21,
    textAlign: 'center',
  },
});

export default Error;
