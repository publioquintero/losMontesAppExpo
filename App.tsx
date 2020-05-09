import * as React from "react";
import {WebView} from "react-native-webview";
import {StyleSheet, SafeAreaView, StatusBar} from "react-native";

export default class App extends React.Component {
   render() {
      return (
         <React.Fragment>
            <StatusBar backgroundColor="blue" barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
               <WebView
                  source={{uri: "https://www.superlosmontes.com/site/"}}
                  style={{marginTop: 20}}
               />
            </SafeAreaView>
         </React.Fragment>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      height: 10,
   },
});