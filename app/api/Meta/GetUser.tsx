import {Button, Text, View} from "react-native";
import * as React from "react";
import {useState} from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";



export default function GetUser(GraphQLQuery:any, Variables:any) {
    const [apiData, setApiData] = useState(null);

    const handleApiCall = async () => {
        try {
            const url = 'https://graphql.anilist.co';
            const options = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('anilistUserToken'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            };

            console.log(options);

            const response = await axios.post(url, { query: GraphQLQuery }, options);
            const data = handleResponse(response);

            console.log('user data : ', data);
            
            setApiData(data);
            
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const handleResponse = (response) => {
        return response.data;
    };

    return {
        handleApiCall,
        apiData,
    };
}
