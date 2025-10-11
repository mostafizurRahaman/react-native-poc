import { StackHeaderProps } from '@react-navigation/stack';
import { Pressable, StyleSheet, View, Text, SafeAreaView } from 'react-native';

const StackHeader = ({ navigation, options, back }: StackHeaderProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Back Button */}
        {back ? (
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
        ) : (
          <View style={styles.placeholder} />
        )}

        {/* Title */}
        <Text style={styles.title}>{options.title ?? 'Title'}</Text>

        {/* Right Side (Profile) */}
        <Pressable style={styles.profileButton}>
          <Text style={styles.backButtonText}>Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default StackHeader;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'blue',
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'blue',
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  placeholder: {
    width: 70, // keeps spacing even if no back button
  },
});
