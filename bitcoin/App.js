 import { StyleSheet, Text, View, SafeAreaView, Platform,StatusBar } from 'react-native';
 import React from 'react'
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotetionList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar  
       backgroundColor="#fff"
      barStyle="light-content"
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
   },
});
