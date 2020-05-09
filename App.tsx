import * as React from "react";
import {WebView} from "react-native-webview";
import {StyleSheet, SafeAreaView} from "react-native";
import { SplashScreen } from 'expo';

export default class App extends React.Component {
   render() {
      return (
         <SafeAreaView style={styles.container}>
            <WebView
               source={{uri: "https://www.superlosmontes.com/site/"}}
               style={{marginTop: 20}}
            />
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
