import React, { useEffect,useRef } from "react";
import { Text, View, StyleSheet,SafeAreaView, StatusBar,BackHandler, Alert,ActivityIndicator } from "react-native";
import WebView from 'react-native-webview';
/* import * as Manifest from '@expo/android-manifest'; */
 
/* // Read the project's manifest
const manifest = await Manifest.readAsync(manifestPath);
 
// Get the Android app permissions as an array
const permissions: string[] = Manifest.getPermissions(manifest); */

export default function App(){
   const styles = StyleSheet.create({
        container: {
          flex: 1,
          height: 10,
        },
       flexContainer: {
        flex: 10
      }
    })
   const webview = useRef<WebView>(null);
   useEffect(() => { 
      const HOME_URL = "https://www.superlosmontes.com/site/"; 
      const onAndroidBackPress = (): boolean => {
      const currentURL = webview.current.startUrl;
         
          /* console.log(webview.current.startUrl); */
          /* if (webview.current) {  */
          if(currentURL!=HOME_URL){ 
             webview.current.goBack();
             return true;
         }else{
               Alert.alert("superlosmontes.com", "¿Desea salir de la aplicación?", [
                 {
                   text: "NO",
                   onPress: () => null,
                   style: "cancel"
                 },
                 { text: "Si", onPress: () => BackHandler.exitApp() }
               ]);
               return true;
         }
      };

       BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      return (): void => { 
       BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
       };
   });

      return (
        <React.Fragment>
          <StatusBar backgroundColor="#44a7e0" barStyle="dark-content"/>
            <SafeAreaView style={styles.container}>
                  <WebView
                  ref={webview}
                    source={{ uri:'https://www.superlosmontes.com/site/'}}
                    startInLoadingState={true}
                    renderLoading={() => (
                        <ActivityIndicator
                          color='black'
                          size='large'
                          style={styles.flexContainer}
                        />
                    )}
                  /> 
            </SafeAreaView>
          </React.Fragment>
      );
};