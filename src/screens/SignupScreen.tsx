import { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const SignupScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <ImageBackground style={styles.container}>
      <View>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name:</Text>
          <TextInput
            keyboardType="default"
            placeholder="Enter your name"
            style={styles.input}
            defaultValue={formData?.name}
            onChangeText={text =>
              setFormData(prev => ({
                ...prev,
                name: text?.trim(),
              }))
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Email:</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="Enter your email"
            style={styles.input}
            defaultValue={formData?.email}
            onChangeText={text =>
              setFormData(prev => ({
                ...prev,
                email: text?.trim(),
              }))
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password:</Text>
          <TextInput
            keyboardType="visible-password"
            textContentType="newPassword"
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry
            defaultValue={formData.password}
            onChangeText={text =>
              setFormData(prev => ({
                ...prev,
                password: text?.trim(),
              }))
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput
            keyboardType="visible-password"
            textContentType="newPassword"
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry
            defaultValue={formData.password}
            onChangeText={text =>
              setFormData(prev => ({
                ...prev,
                confirmPassword: text?.trim(),
              }))
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;

// styles :
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: 'orange',
    fontWeight: 700,
  },
  inputContainer: {},
  label: {},
  input: {},
});
