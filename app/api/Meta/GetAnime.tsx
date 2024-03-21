import {Button, Text, View} from "react-native";
import * as React from "react";
import {useState} from "react";
import axios from "axios";


// Generic Handler for Grabbing Anilist Category Data for Discovery Page Grids
export default function GetAnime(GraphQLQuery:any, Variables:any) {
    const [apiData, setApiData] = useState(null);

    const handleApiCall = async () => {
        try {
            const url = 'https://graphql.anilist.co';
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            };

            const response = await axios.post(url, { query: GraphQLQuery, variables: Variables }, options);
            const data = handleResponse(response);

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
