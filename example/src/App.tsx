import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Anb UI Components Example!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
