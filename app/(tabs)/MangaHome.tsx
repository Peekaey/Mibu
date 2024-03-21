import { Text, View } from "react-native";
import * as React from "react";

export default function MangaHome() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>MangaHome!</Text>
            <Text>{localStorage.getItem('access_token')}</Text>

            <Text>{localStorage.getItem('refresh_token')}</Text>

            <Text>{localStorage.getItem('expires_in')}</Text>

            <Text>{localStorage.getItem('isUserLoggedIn')}</Text>

        </View>
    );
}