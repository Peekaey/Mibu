import {Text, View, Button} from "react-native";
import React, {useEffect, useState} from "react";
import * as LocalAuthentication from 'expo-local-authentication';

import {Redirect, router} from "expo-router";
import * as SecureStore from 'expo-secure-store';

// const Index = () => {
//   return <Redirect href="/(tabs)/Feed" />;
// }



export default function Index() {

  const [isLockScreenEnabled, setIsLockScreenEnabled] = useState(false);
  const [authenticationChecked, setAuthenticationChecked] = useState(false);

  useEffect(() => {
    const fetchLockScreenToggleState = async () => {
      try {
        const lockScreenToggleState = await SecureStore.getItemAsync('lockScreenToggleState');
        setIsLockScreenEnabled(lockScreenToggleState === 'true');
        setAuthenticationChecked(true);
      } catch (error) {
        console.log("Error getting lockScreenToggleState: ", error);
      }
    };

    // Fetch the lock screen state
    fetchLockScreenToggleState();
  }, []);

  const checkBiometrics = async () => {
    try {
      const hasBiometrics = await LocalAuthentication.hasHardwareAsync();

      if (hasBiometrics) {
        const biometricRecords = await LocalAuthentication.isEnrolledAsync();

        if (biometricRecords) {
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate for App Access',
            fallbackLabel: '',
          });

          if (result.success) {
            console.log('Biometric authentication successful');
            router.replace('/(tabs)/Feed');
          } else {
            console.log('Biometric authentication failed');
          }
        } else {
          console.log('No biometric records found');
        }
      } else {
        console.log('Biometrics not available on this device');
      }
    } catch (error) {
      console.error('Error checking biometrics:', error);
    }
  };

  useEffect(() => {
    // Perform biometrics check if lock screen is enabled
    if (isLockScreenEnabled && authenticationChecked) {
      checkBiometrics();
    }
  }, [isLockScreenEnabled, authenticationChecked]);

  if (!authenticationChecked) {
    // Display a loading state while checking authentication
    return <View><Text>Loading...</Text></View>;
  }

  if (!isLockScreenEnabled) {
    return <Redirect href="/(tabs)/Feed" />;
  }

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Lockscreen has been enabled</Text>
        <Button title="Press to authentication" onPress={checkBiometrics} />
      </View>
  );
}