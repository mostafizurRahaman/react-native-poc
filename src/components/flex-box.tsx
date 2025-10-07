import { StyleSheet, Text, View } from 'react-native';

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.view}>View</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.view}>View</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.view}>View</Text>
      </View>
      <View style={styles.box1}>
        <Text style={styles.view}>View</Text>
      </View>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 30,
    borderRadius: 15,
    borderWidth: 2,
    display: 'flex',
    //  flexDirection: 'row',
    flex: 1,
    gap: 20,
  },
  box: {
    flex: 1.8,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 5,
  },
  box1: {
    flex: 1.6,

    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 5,
    cursor: 'pointer',
  },
  box2: {
    flex: 2,
    backgroundColor: 'green',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 5,
    cursor: 'pointer',
  },
  view: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'auto',
  },
});
