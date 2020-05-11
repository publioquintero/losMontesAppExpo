import React, { useEffect,useRef } from "react";
import { Text, View, StyleSheet,SafeAreaView, StatusBar,BackHandler, Alert,ActivityIndicator } from "react-native";
import WebView from 'react-native-webview';

export default function App() {
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
      
         /* const currentURL = webview.getUrl();
         if(currentURL!=HOME_URL){  */

         if (webview.current) { 
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
   /*  <SafeAreaView style={styles.container}>  */
   <React.Fragment>
    <StatusBar backgroundColor="#44a7e0" barStyle="dark-content"/>
      <SafeAreaView style={styles.container}>
            <WebView
              source={{ uri:'https://www.superlosmontes.com/site/'}}
              ref={webview}
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