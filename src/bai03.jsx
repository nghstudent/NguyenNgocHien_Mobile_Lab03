import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <LinearGradient
      colors={['lightblue', 'lightblue', 'skyblue', 'white', 'skyblue']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}>
      {/* Circle */}
      <FontAwesome
        name="lock"
        size={120}
        color="black"
        style={styles.lockIcon}
      />

      {/* Texts */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>FORGET{'\n'}PASSWORD</Text>
        <Text style={styles.subtitle}>
          Provide your account's email for with you want to reset your password
        </Text>

        {/* Input with icon */}
        <View style={styles.inputWrapper}>
          <FontAwesome
            name="envelope"
            size={20}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
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
  // circle: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 75,
  //   borderWidth: 10,
  //   borderColor: 'black',
  //   backgroundColor: 'transparent',
  //   marginBottom: 50,
  //   marginTop: 70,
  // },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
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
    fontSize: 15,
    color: 'black',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'yellow',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // bottomText: {
  //   textAlign: 'center',
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   color: 'black',
  //   marginBottom: 40,
  // },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  lockIcon: {
    marginBottom: 50,
    marginTop: 70,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingVertical: 0,
  },
});
