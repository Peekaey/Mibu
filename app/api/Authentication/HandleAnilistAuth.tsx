import React, {useEffect} from 'react';
import {View, Text, Linking, TouchableOpacity, Platform} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import {router} from "expo-router";

import {grant_type} from "./AnilistAPIClientIdentifiers";
import {client_id} from "./AnilistAPIClientIdentifiers";
import {client_secret} from "./AnilistAPIClientIdentifiers";
import {authorisation_endpoint} from "./AnilistAPIClientIdentifiers";
// import {ObtainAccessToken} from "./HandleAuthorisationCode";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {GetCurrentUser} from "../AnilistHelpers/UserHelpers";
import {SaveCurrentUser} from "../AnilistHelpers/UserHelpers";

WebBrowser.maybeCompleteAuthSession();

export default function HandleAnilistAuthButton() {
    const handleLoginPress = async () => {

        const redirectUri = AuthSession.makeRedirectUri({
            scheme: 'mibu-app',
            path: 'redirect',
        });
        const authUrl = `${authorisation_endpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&response_type=${grant_type}`;

        try {
            if (Platform.OS === 'ios') {

                const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri);

                if (result.type === 'success' && result.url) {

                    var AuthorisationCode = result.url.split('code=')[1];

                    GetSaveAccessToken(AuthorisationCode, redirectUri, client_id, client_secret)
                        .then(success => {
                            console.log('Access token obtained:', success);
                        })
                        .catch(error => {
                            console.error('Error obtaining access token:', error);
                        });

                } else {
                    console.error('Error opening browser or user canceled the authentication. IOS Handler:', result);
                }
            } else if (Platform.OS === 'android') {

                const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri);

                if (result.type === 'success' && result.url) {

                    var AuthorisationCode = result.url.split('code=')[1];

                    GetSaveAccessToken(AuthorisationCode, redirectUri, client_id, client_secret)
                        .then(success => {
                            console.log('Access token obtained:', success);
                        })
                        .catch(error => {
                            console.error('Error obtaining access token:', error);
                        });

                    router.navigate('screens/Profile/ProfilePopup');

                } else {
                    console.error('Error opening browser or user canceled the authentication. Android Handler:', result);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
        console.log('End handleLogin');
    };

    return (
        <View style={{ alignItems: 'center', padding: 10, borderRadius: 12, backgroundColor: '#F5AC96', marginTop: 20 }}>
            <Text onPress={handleLoginPress}>Login to Anilist</Text>
        </View>
    );
}

export function GetSaveAccessToken(AuthorisationCode: string, redirectUri: string, client_id: string, client_secret: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        var authorisationRequest = {
            url: 'https://anilist.co/api/v2/oauth/token',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                'grant_type': 'authorization_code',
                'client_id': client_id,
                'client_secret': client_secret,
                'redirect_uri': redirectUri,
                'code': AuthorisationCode,
            }
        };

        axios(authorisationRequest)
            .then(response => {
                // console.log('Access token:', response.data.access_token);
                // console.log('Token type:', response.data.token_type);
                // console.log('Expires in:', response.data.expires_in);
                // console.log("Something", response)
                SecureStore.setItemAsync('access_token', response.data.access_token);
                SecureStore.setItemAsync('refresh_token', response.data.refresh_token);
                SecureStore.setItemAsync('expires_in', response.data.expires_in);
                SecureStore.setItemAsync('isUserLoggedIn', 'true');
                GetCurrentUser().then(user => SaveCurrentUser(user))
                resolve(true);
            })
            .catch(error => {
                console.error('Unable to obtain JWT Token: ', error);
                resolve(false);
            });
    });
}


