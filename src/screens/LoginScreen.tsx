import { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PressableComp from '../components/PressableComp';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww',
      }}
      blurRadius={20}
      style={styles.container}
    >
      <Image
        source={{
          uri: 'https://www.pngfind.com/pngs/m/59-596385_lion-png-lion-logo-vector-transparent-png.png',
        }}
        style={styles.logo}
        resizeMode="contain"
        blurRadius={1}
      />
      {/* Input Component */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Enter your email"
          style={styles.input}
          defaultValue={formData?.password}
          onChangeText={text =>
            setFormData(prev => ({
              ...prev,
              email: text?.trim(),
            }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
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
        <PressableComp
          text="Login"
          onPress={() => {
            Alert.alert(
              `EMAIL: ${formData?.email}`,
              `Password: ${formData?.password}`,
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 30,
  },
  logo: {
    width: 200,
    height: 200,
  },
  label: {
    color: 'black',
    fontWeight: 600,
    textTransform: 'capitalize',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 5,
    color: 'black',
    width: '100%',
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
  },
});
