import { Text, View } from 'react-native';

// ? INFO :
// View Components used to wrap others components
// Inside view without Text Tag we cannot able to add any text it will thorough error
// Here Text Tag used to Pass Text
// In React Native Text Tag Used to wrap any text
const ViewComponents = () => {
  return (
    <View>
      <Text>View Component + Text Components</Text>
    </View>
  );
};

export default ViewComponents;
