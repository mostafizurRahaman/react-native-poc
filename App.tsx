import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ViewComponents from './src/components/ViewComponent';
import ButtonComponent from './src/components/ButtonComponent';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          padding: 20,
        }}
      >
        <ViewComponents />
        <ButtonComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
