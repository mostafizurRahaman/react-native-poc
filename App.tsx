import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import ViewComponents from './src/components/ViewComponent';
// import ButtonComponent from './src/components/ButtonComponent';

import FlexBox from './src/components/flex-box';
import ImageComponent from './src/components/ImageComponent';
import { Alert, ImageBackground, StyleSheet, View } from 'react-native';
import TouchableComp from './src/components/TouchableComp';
import PressableComp from './src/components/PressableComp';

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
            <View>
              <TouchableComp
                isTouchableOpacity={true}
                text={'Touch Me'}
                onPress={() => {
                  Alert.alert('Touch me');
                }}
                backgroundColor="orange"
              />
              <TouchableComp
                isTouchableHeightlight={true}
                text={'Touch Me'}
                onPress={() => {
                  Alert.alert('Touch me');
                }}
                backgroundColor="green"
              />
              <TouchableComp
                withoutFeedBack={true}
                text={'Touch Me'}
                onPress={() => {
                  Alert.alert('Touch me');
                }}
                backgroundColor="orange"
              />
              <PressableComp
                text="Press Me"
                onPress={() => {
                  Alert.alert("😂 Don't press me");
                }}
              />
            </View>
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
