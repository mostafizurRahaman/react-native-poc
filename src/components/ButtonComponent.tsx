// Button Component used to create button
//  It has some minimal props :
// It's not fully customizable
// it has some required props : Title, color, onPress

import { Alert, Button, View } from 'react-native';

const ButtonComponent = () => {
  return (
    <View>
      <Button
        title="Press Me to learn"
        onPress={() => {
          Alert.alert('Hi, I am a learner.', 'You want to be my teacher?');
        }}
        color={'#e73600ff'}
      />
    </View>
  );
};

export default ButtonComponent;
