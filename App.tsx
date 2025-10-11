import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackDemo from './src/nvaigators/stack/StackDemo';

// Show Screens:
const App = () => {
  return (
    <SafeAreaProvider>
      <StackDemo />
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({
//   contentContainer: {
//     flex: 1,
//     width: '100%',
//     gap: 20,
//   },
//   wallpaper: {
//     flex: 1,
//     gap: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlay: {
//     backgroundColor: 'rgba(33, 36, 248, 0.42)',
//     padding: 20,
//     flex: 1,
//     width: '100%',
//     gap: 20,
//   },
//   container: {
//     flex: 1,
//   },
// });

export default App;
