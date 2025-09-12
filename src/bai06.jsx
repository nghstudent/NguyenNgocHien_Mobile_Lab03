import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Pressable,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function App() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState(null); // "male" hoặc "female"

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>REGISTER</Text>

            {/* Name */}
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            {/* Phone */}
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />

            {/* Email */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password */}
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

            {/* Birthday */}
            <TextInput
                style={styles.input}
                placeholder="Birthday"
                value={birthday}
                onChangeText={setBirthday}
            />

            {/* Gender */}
            <View style={styles.genderContainer}>
                <TouchableOpacity
                    style={styles.genderOption}
                    onPress={() => setGender('male')}
                >
                    <View style={[styles.radio, gender === 'male' && styles.radioSelected]} />
                    <Text style={styles.genderText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.genderOption}
                    onPress={() => setGender('female')}
                >
                    <View style={[styles.radio, gender === 'female' && styles.radioSelected]} />
                    <Text style={styles.genderText}>Female</Text>
                </TouchableOpacity>
            </View>

            {/* REGISTER Button */}
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>REGISTER</Text>
            </TouchableOpacity>

            {/* Terms */}
            <Text style={styles.termsText}>
                When you agree to terms and conditions
            </Text>
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
        marginBottom: 40,
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
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    genderOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radio: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 6,
    },
    radioSelected: {
        backgroundColor: 'black',
    },
    genderText: {
        fontSize: 14,
        color: 'black',
    },
    registerButton: {
        backgroundColor: '#cc513f',
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    registerButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    termsText: {
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
    },
});
