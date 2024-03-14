import * as SecureStore from "expo-secure-store";
import axios from "axios";
import {router} from "expo-router";

import {useAvatarUpdate} from "../../components/NavigationHeader/Avatar";
export function GetCurrentUser() {

    return new Promise((resolve, reject) => {
        SecureStore.getItemAsync('access_token')
            .then(token => {
                var userRequest = {
                    url: 'https://graphql.anilist.co',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    data: {
                        query: `
                        query {
                          Viewer {
                            id
                            name
                            avatar {
                              large
                            }
                          }
                        }
                        `
                    }
                };

                axios(userRequest)
                    .then(response => {
                        console.log('User:', response.data.data.Viewer);
                        resolve(response.data.data.Viewer);
                    })
                    .catch(error => {
                        console.error('Unable to obtain user data:', error);
                        reject(error);
                    });
            })
            .catch(error => {
                console.error('Unable to obtain access token:', error);
                reject(error);
            });
    });
}

export function SaveCurrentUser(user) {
    SecureStore.setItemAsync('userId', String(user.id)); // Convert id to string if necessary
    SecureStore.setItemAsync('userName', user.name);
    SecureStore.setItemAsync('userAvatarLink', user.avatar.large); // Store the avatar link directly

}

export function Logout() {
    SecureStore.deleteItemAsync('access_token');
    SecureStore.deleteItemAsync('refresh_token');
    SecureStore.deleteItemAsync('expires_in');
    SecureStore.deleteItemAsync('isUserLoggedIn');
    SecureStore.deleteItemAsync('userId');
    SecureStore.deleteItemAsync('userName');
    SecureStore.deleteItemAsync('userAvatarLink');
    router.back();
}