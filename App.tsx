import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import ViewComponents from './src/components/ViewComponent';
// import ButtonComponent from './src/components/ButtonComponent';

import FlexBox from './src/components/flex-box';
import ImageComponent from './src/components/ImageComponent';
import { ImageBackground, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.wallpaper}
          resizeMode="cover"
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1755882951379-16eb71512272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
          }}
          blurRadius={10}
        >
          <View style={styles.overlay}>
            <ImageComponent />
            <FlexBox />
            {/* <StyleSheet /> */}
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: '100%',
    gap: 20,
  },
  wallpaper: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(33, 36, 248, 0.42)',
    padding: 20,
    flex: 1,
    width: '100%',
    gap: 20,
  },
  container: {
    flex: 1,
  },
});

export default App;
