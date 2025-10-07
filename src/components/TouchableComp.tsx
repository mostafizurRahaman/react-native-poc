import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface ITouchableComp {
  isTouchableOpacity?: boolean;
  isTouchableHeightlight?: boolean;
  withoutFeedBack?: boolean;
  onPress?: () => void;
  text: string;
  backgroundColor?: string;
}

const TouchableComp = ({
  isTouchableOpacity = false,
  isTouchableHeightlight = false,
  withoutFeedBack = false,
  onPress,
  text,
  backgroundColor = 'green',
}: ITouchableComp) => {
  const onPressFunc = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <View style={styles.container}>
      {isTouchableOpacity && (
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor,
            },
          ]}
          onPress={onPressFunc}
          activeOpacity={0.1}
        >
          <Text style={[styles.text]}>{text}</Text>
        </TouchableOpacity>
      )}
      {isTouchableHeightlight && (
        <TouchableHighlight
          style={[
            styles.button,
            {
              backgroundColor,
            },
          ]}
          underlayColor={'#f0f'}
          onPress={onPressFunc}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableHighlight>
      )}
      {withoutFeedBack && (
        <TouchableWithoutFeedback
          style={[
            styles.button,
            {
              backgroundColor,
            },
          ]}
          onPress={onPressFunc}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default TouchableComp;

// Styles :
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 500,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: 'blue',
  },
});
