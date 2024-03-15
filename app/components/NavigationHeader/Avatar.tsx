import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ImageSourcePropType, TouchableOpacity} from 'react-native';
import  userAvatar  from '../../assets/images/userAvatar.png';
import {Redirect, router} from "expo-router";
import * as SecureStore from "expo-secure-store";


interface CustomAvatarProps {
    size?: number;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ size = 50 }) => {
    const [AvatarImageSource, setImageSource] = useState<ImageSourcePropType | null>(null);

    useEffect(() => {
        const fetchAvatar = async () => {
            const avatar = await GetUserAvatar();
            setImageSource(avatar);
        };

        fetchAvatar();
    }, []);

    const handlePress = () => {
        // Navigate to the desired route, e.g., 'ProfilePopup'
        router.navigate('screens/Profile/ProfilePopup');
        // navigation.navigate('screens/Profile/ProfilePopup');
    };

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <TouchableOpacity onPress={handlePress}>
                {AvatarImageSource && <Image source={AvatarImageSource} style={styles.image} />}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        overflow: 'hidden',
        marginRight: 10,
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default CustomAvatar;

export async function GetUserAvatar(): Promise<ImageSourcePropType | null> {
    let userAvatarLink = require('../../assets/images/userAvatar.png'); // Assuming this is the default avatar
    try {
        const userAvatar = await SecureStore.getItemAsync('userAvatarLink');
        console.log('User avatar link:', userAvatar);
        if (userAvatar) {
            userAvatarLink = { uri: userAvatar };
        }
    } catch (error) {
        console.error('Error getting user avatar:', error);
    }
    return userAvatarLink;
}
