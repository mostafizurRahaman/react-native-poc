import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ViewComponents from './src/components/ViewComponent';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ViewComponents />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
