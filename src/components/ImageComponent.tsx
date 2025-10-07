import { Image, StyleSheet, View } from 'react-native';

/**
 * Here I have learnt about Image tag
 * source @prop use to show images
 * For local image we have use @requires()  function to show file location
 * @source prop also receive {url: ''} while the image is cdn / external link
 * @returns Return Image component
 */

const ImageComponent = () => {
  return (
    <View>
      <Image
        source={require('../assets/shoe.webp')}
        width={100}
        height={100}
        style={styles.image}
        defaultSource={{
          uri: 'https://placehold.co/600x400/EEE/31343C',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    margin: 'auto',
    resizeMode: 'repeat',
  },
});

export default ImageComponent;
