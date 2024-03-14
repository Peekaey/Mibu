import React from 'react';
import {View, Image, StyleSheet, ImageSourcePropType, TouchableOpacity} from 'react-native';
import  userAvatar  from '../../assets/images/userAvatar.png';
import {Redirect, router} from "expo-router";
interface CustomAvatarProps {
    size?: number;
    imageSource?: ImageSourcePropType | null;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ size = 50, imageSource }) => {

    const handlePress = () => {
        // Navigate to the desired route, e.g., 'ProfilePopup'
        router.navigate('screens/Profile/ProfilePopup');
        // navigation.navigate('screens/Profile/ProfilePopup');
    };

    if (imageSource === null || imageSource === undefined) {
        imageSource = require('../../assets/images/userAvatar.png');
    }

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <TouchableOpacity onPress={handlePress}>
            {imageSource && <Image source={imageSource} style={styles.image} />}
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