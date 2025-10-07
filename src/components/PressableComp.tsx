import { Pressable, StyleSheet, Text, View } from 'react-native';

interface IPressableComp {
  text: string;
  onPress?: () => void;
}

const PressableComp = ({ text, onPress }: IPressableComp) => {
  return (
    <Pressable
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      disabled={!onPress}
      style={({ pressed }) => {
        return [
          styles?.pressable,

          pressed ? styles.withoutPress : styles.pressable,
        ];
      }}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    width: 200,
  },
  pressableBtn: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 15,
  },
  withoutPress: {
    backgroundColor: 'orange',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
});

export default PressableComp;
