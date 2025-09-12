import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Pressable,
} from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function App() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>LOGIN</Text>

            {/* Name input */}
            <View style={styles.inputWrapper}>
                <FontAwesome name="user" size={20} color="black" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            {/* Password input */}
            <View style={styles.inputWrapper}>
                <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Password"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
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

            {/* Create account link */}
            <TouchableOpacity>
                <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700', // vàng
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 50,
        color: 'black',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6C84F',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 15,
        paddingHorizontal: 10,
        height: 45,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        color: 'black',
    },
    loginButton: {
        backgroundColor: 'black',
        height: 45,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    createAccount: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
    },
});
