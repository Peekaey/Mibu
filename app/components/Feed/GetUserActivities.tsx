// apiService.js
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { GetUserActivities } from '../../api/queries/CurrentUserQueries';

export async function fetchUserActivities() {
    try {
        const access_token = await SecureStore.getItemAsync('access_token');

        const response = await axios({
            url: 'https://graphql.anilist.co',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
            data: {
                query: GetUserActivities,
                variables: { },
            },
        });

        return response.data.data.Page.activities;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
