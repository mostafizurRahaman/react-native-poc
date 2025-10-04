import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import ViewComponents from './src/components/ViewComponent';
// import ButtonComponent from './src/components/ButtonComponent';
import StyleSheet from './src/components/StyleSheet';
import FlexBox from './src/components/flex-box';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {/* <ViewComponents />
        <ButtonComponent /> */}
        <FlexBox />
        {/* <StyleSheet /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
