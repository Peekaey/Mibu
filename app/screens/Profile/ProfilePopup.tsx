import {Button, Platform, Switch, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';
import {ToggleLockScreen} from "../../helpers/BiometricAuthenticationHelper";
import {Link, router} from "expo-router";
import {StatusBar} from "expo-status-bar";






// Customises the Handle of the Profile Bottom Sheet - Currently Hiding the Handle
export function BottomSheetHandleProperties() {

    return (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <View style={{ backgroundColor: 'white', height: 5, width: 50, borderRadius: 5 }} />
        </View>
    );
}

export default function ProfilePopup() {

    // This Logic is specific for "Require Authentication On Launch" setting
    const [isLockScreenOn, setIsLockScreenOn] = useState(false);

    const dismissPage = () => {
        // If the page was presented as a modal, dismiss it.
        if (router.canGoBack()) {
            router.back();
        } else {
            // Otherwise, navigate to the root.
            router.push('/');
        }
    }

    const handleToggleSwitch = () => {
        setIsLockScreenOn((prev) => !prev);
    };

    useEffect(() => {
        // Load toggle state from SecureStore when the component mounts
        const loadToggleState = async () => {
            try {
                const storedToggleState = await SecureStore.getItemAsync('lockScreenToggleState');
                console.log('Stored toggle state:', storedToggleState);
                if (storedToggleState !== null) {
                    setIsLockScreenOn(storedToggleState === 'true');
                }
            } catch (error) {
                console.error('Error loading toggle state:', error);
            }
        };

        loadToggleState();
    }, []);

    useEffect(() => {
        // Save toggle state to SecureStore whenever it changes
        const saveToggleState = async () => {
            try {
                await SecureStore.setItemAsync('lockScreenToggleState', String(isLockScreenOn));
            } catch (error) {
                console.error('Error saving toggle state:', error);
            }
        };

        saveToggleState();
    }, [isLockScreenOn]);

    return (
        <View style={{ padding: 16, ...(Platform.OS === 'android' && { marginTop: 50 }) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={dismissPage}>
                    <MaterialCommunityIcons name={'close'} size={32} color={'black'} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, marginRight: 32 }}>Settings</Text>
            </View>

            <ToggleLockScreen label="Require Authentication On Launch" isSwitchOn={isLockScreenOn} onToggleSwitch={handleToggleSwitch} />
        </View>
    );
}