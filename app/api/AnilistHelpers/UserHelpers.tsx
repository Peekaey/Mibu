import * as SecureStore from "expo-secure-store";
import axios from "axios";

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
    console.log("User Is:", user)
    SecureStore.setItemAsync('user', JSON.stringify(user));
}