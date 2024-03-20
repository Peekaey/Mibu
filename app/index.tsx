import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import HandleAnilistAuthButton from "./api/Authentication/HandleAnilistAuth";
import { Link } from "expo-router";
import { PaperProvider } from "react-native-paper";
export default function Index() {


    return (

        <PaperProvider>
            <View style={{ flex: 1 }}>
                <StatusBar style="light" />
                <ImageBackground source={require('../app/assets/images/storm.jpg')} style={{ flex: 1 }} blurRadius={5}>
                    {/* Add the centered box here */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ width: '90%', height: '90%', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderWidth: 0, borderColor: 'white', borderRadius: 20 }}>
                            <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginTop: 20, marginLeft: 20 }}>Mibu</Text>
                            <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', marginTop: 10, marginLeft: 20 }}>Unofficial Mobile Anilist Client</Text>
                            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20, alignItems: 'center' }}>
                                <Link href={'/Discovery'} style={{ textAlign: 'center', padding: 10, borderRadius: 12, backgroundColor: 'white', marginTop: 20, width: '75%' }}>
                                    <Text style={{ color: 'black' }}>Discover</Text>
                                </Link>
                                <HandleAnilistAuthButton />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </PaperProvider>
    );

}