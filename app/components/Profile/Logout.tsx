import {Text, View} from "react-native";
import React from "react";
import {Logout} from "../../api/AnilistHelpers/UserHelpers";
export default function LogoutButton() {

    return (
        <View style={{ alignItems: 'center', padding: 10, borderRadius: 12, backgroundColor: '#F5AC96', marginTop: 20 }}>
            <Text onPress={Logout}>Logout and Reset App Preferences</Text>
        </View>
    );
}