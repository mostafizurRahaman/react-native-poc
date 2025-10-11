import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Name: {route.params.user.name}</Text>
      <Text style={styles.text}> Email: {route.params.user.email}</Text>
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
      <Button
        title={'Go to Home'}
        onPress={() => navigation?.navigate('home')}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  text: {
    fontSize: 18,
    color: 'blue',
  },
});
