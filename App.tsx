import React from 'react';
import { SafeAreaView, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <WelcomeScreen />
    </View>
  );
};

export default App;
