import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={{ uri: 'https://wechope.org/wp-content/uploads/2021/10/Closeup-of-boy-brown-eye-1500x883.jpg' }}
                style={styles.logo}
            />

            {/* Username */}
            <View style={styles.inputWrapper}>
                <FontAwesome name="user-o" size={20} color="#0068ff" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Please input user name"
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor="#999"
                />
            </View>

            {/* Password */}
            <View style={styles.inputWrapper}>
                <FontAwesome name="lock" size={20} color="#0068ff" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Please input password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor="#999"
                />
            </View>

            {/* Login button */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            {/* Links */}
            <View style={styles.linkRow}>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.dividerText}>Other Login Methods</Text>
                <View style={styles.line} />
            </View>

            {/* Social login */}
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <MaterialCommunityIcons name="account-plus" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#f4a300' }]}>
                    <MaterialCommunityIcons name="wifi" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
                    <FontAwesome name="facebook" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 40,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        paddingHorizontal: 5,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        color: 'black',
    },
    loginButton: {
        backgroundColor: '#0068ff',
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    linkRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    linkText: {
        color: 'black',
        fontSize: 14,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#0068ff',
    },
    dividerText: {
        marginHorizontal: 10,
        fontSize: 12,
        color: '#0068ff',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 6,
        backgroundColor: '#00aaff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
