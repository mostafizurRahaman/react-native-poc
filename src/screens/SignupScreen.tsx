import { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PressableComp from '../components/PressableComp';

const SignupScreen = ({ route, navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  console.log('Singup', { route });
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1616731948638-b0d0befef759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
      }}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name:</Text>
          <TextInput
            keyboardType="default"
            placeholder="Enter your name"
            style={styles.input}
            defaultValue={formData?.name}
            placeholderTextColor={'white'}
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
            placeholderTextColor={'white'}
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
            placeholderTextColor={'white'}
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
            placeholderTextColor={'white'}
            secureTextEntry
            defaultValue={formData.confirmPassword}
            onChangeText={text =>
              setFormData(prev => ({
                ...prev,
                confirmPassword: text?.trim(),
              }))
            }
          />
        </View>
        <View>
          <PressableComp
            text={'Sign Up'}
            onPress={() => {
              console.table(formData);
            }}
          />
        </View>
        <View style={styles.navigationContainer}>
          <Text style={styles.text}>You don't have any account?</Text>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.navigationContainer}>
          <Text
            onPress={() => {
              navigation?.navigate('profile', {
                user: {
                  name: 'Mostafizur Rahaman',
                  email: 'mostafizurrahaman0401@gmail.com',
                },
              });
            }}
            style={styles.text}
          >
            View Profile
          </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    gap: 30,
  },
  title: {
    fontSize: 30,
    color: 'orange',
    fontWeight: 700,
    textAlign: 'center',
  },
  label: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 600,
    textTransform: 'capitalize',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    width: '100%',
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
  },
  navigationContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 500,
    color: 'white',
    fontSize: 16,
  },
  loginText: {
    fontWeight: 600,
    color: 'red',
    fontSize: 18,
  },
});
