import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Circle */}
      <View style={styles.circle} />

      {/* Texts */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>GROW{'\n'}YOUR BUSINESS</Text>
        <Text style={styles.subtitle}>
          We will help you to grow your business using online server
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: 'black',
    backgroundColor: 'skyblue',
    marginBottom: 80,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 13,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'yellow',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
