import {Text, View, Button} from "react-native";
import React, {useEffect, useState} from "react";
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from "@react-navigation/native";
import {Redirect} from "expo-router";


const Index = () => {
  return <Redirect href="/(tabs)/Feed" />;
}

export default Index;

// TODO Better Styling for The LockScreen
// export default function LockScreen() {
//
//
//
//   const checkBiometrics = async () => {
//     try {
//       const hasBiometrics = await LocalAuthentication.hasHardwareAsync();
//
//       if (hasBiometrics) {
//         const biometricRecords = await LocalAuthentication.isEnrolledAsync();
//
//         if (biometricRecords) {
//           const result = await LocalAuthentication.authenticateAsync({
//             promptMessage: 'Authenticate for Anilist access',
//             fallbackLabel: '',
//           });
//
//           if (result.success) {
//             console.log('Biometric authentication successful');
//
//           } else {
//             console.log('Biometric authentication failed');
//           }
//         } else {
//           console.log('No biometric records found');
//         }
//       } else {
//         console.log('Biometrics not available on this device');
//       }
//     } catch (error) {
//       console.error('Error checking biometrics:', error);
//     }
//   };
//
//   useEffect(() => {
//     // Run checkBiometrics on component mount
//     checkBiometrics();
//   }, []); // The empty dependency array ensures this runs only once on mount
//
//   return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Login Screen</Text>
//         <Button title="Try Again" onPress={checkBiometrics} />
//       </View>
//   );
// }