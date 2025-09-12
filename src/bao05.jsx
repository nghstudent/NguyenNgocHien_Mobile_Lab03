import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>LOGIN</Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Input Password với icon ẩn/hiện */}
      <View style={styles.passwordWrapper}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <Entypo
            name={passwordVisible ? 'eye' : 'eye-with-line'}
            size={20}
            color="black"
          />
        </Pressable>
      </View>

      {/* LOGIN button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Terms text */}
      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>

      {/* Forgot password link */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>For got your password?</Text>
      </TouchableOpacity>

      {/* Or login with */}
      <Text style={styles.orText}>Or login with</Text>

      {/* Social login buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#0068ff' }]}>
          <Text style={styles.socialZ}>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white', borderWidth: 1, borderColor: '#ccc' }]}>
          <FontAwesome name="google" size={24} color="#4285F4" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8f1e4',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 70,
    marginTop:5,
    color: 'black',
  },
  input: {
    backgroundColor: '#c6dbd2',
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'black',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c6dbd2',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  eyeIcon: {
    padding: 6,
  },
  loginButton: {
    backgroundColor: '#cc513f',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#3366cc',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
  orText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  socialButton: {
    width: 70,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialZ: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
