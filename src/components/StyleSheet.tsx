import { StyleSheet, Text, View } from 'react-native';

const StyleSheetComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Welcome to MRFTECHBD</Text>
      </View>
    </View>
  );
};

export default StyleSheetComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dadada',
  },
  wrapper: {
    backgroundColor: '#ff5e00ff',
    borderRadius: '50%',
    padding: 20,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 1)',
  },
  text: {
    fontSize: 26,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'white',
    shadowColor: '#000',

    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
});
