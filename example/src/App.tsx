import * as React from 'react';

import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from 'react-native-use-fade-in-out-animation';

export default function App() {
  const { fadeIn, opacity, fadeOut } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, opacity }} />

      <Button title="1 - Fade In" onPress={() => fadeIn()} />

      <Button
        title="2 - Fade Out"
        onPress={() => fadeOut({ duration: 1000, useNativeDriver: true })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  box: {
    width: 100,
    height: 100,
    marginVertical: 20,
    backgroundColor: 'grey',
  },
});
