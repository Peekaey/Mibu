import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import {Switch, Text, View} from "react-native";


export function ToggleLockScreen({ label, isSwitchOn, onToggleSwitch }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>{label}</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
    );
}

export const useAuthentication = () => {
    const [isLockScreenOn, setIsLockScreenOn] = useState(false);

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

    return {
        isLockScreenOn,
        handleToggleSwitch,
    };
};