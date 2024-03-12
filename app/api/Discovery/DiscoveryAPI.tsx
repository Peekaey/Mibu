import {Button, Text, View} from "react-native";
import * as React from "react";
import {useState} from "react";


// Generic Handler for Grabbing Anilist Category Data for Discovery Page Grids
export default function AnilistDiscoveryGridCall(GraphQLQuery) {
    const [apiData, setApiData] = useState(null);

    const handleApiCall = async () => {
        try {

            // Define the API request configuration
            var url = 'https://graphql.anilist.co';
            var options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: GraphQLQuery,
                }),
            };

            // Make the API request
            const response = await fetch(url, options);
            const data = await handleResponse(response);

            setApiData(data);
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const handleResponse = (response) => {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    };

    return {
        handleApiCall,
        apiData,
    };
};
