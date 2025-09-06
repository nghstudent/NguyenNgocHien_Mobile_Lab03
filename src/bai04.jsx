import React, { useState, useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <LinearGradient
      colors={['lightblue', 'lightblue', 'skyblue', 'white', 'skyblue']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}>
  
      <Text style={styles.codeText}>CODE</Text>

      {/* Texts */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>VERIFICATION</Text>
        <Text style={styles.subtitle}>
          Enter ontime password send on ++849092605798
        </Text>

        {/* 6 ô nhập OTP */}
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChange(text, index)}
              autoFocus={index === 0}
              textAlign="center"
              selectionColor="black"
            />
          ))}
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  codeText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 50,
    marginTop: 70,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    fontSize: 20,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
});
