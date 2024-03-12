import React, {useEffect, useRef, useState} from "react";
import {ActivityIndicator, ScrollView, View} from "react-native";
import AnilistDiscoveryGridCall from "../../api/Discovery/DiscoveryAPI";
import DiscoveryItem from "./DiscoveryItem";



export default function DiscoveryGrid({ GraphQLQuery }) {
    const { handleApiCall, apiData } = AnilistDiscoveryGridCall(GraphQLQuery);
    const [isLoading, setIsLoading] = useState(true);
    const hasFetchedData = useRef(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!hasFetchedData.current) {
                    await handleApiCall();
                    hasFetchedData.current = true;
                    setIsLoading(false); // Set loading to false after data is fetched
                    console.log("API Data:", apiData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [GraphQLQuery, handleApiCall, apiData]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <ScrollView horizontal={true} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false}>
                    {apiData && apiData.data && apiData.data.Page && apiData.data.Page.media &&
                        apiData.data.Page.media.map((item, index) => (
                            <DiscoveryItem
                                key={index}
                                SourceImage={item.coverImage.extraLarge}
                                Title={item.title && item.title.english ? item.title.english : 'No English title available'}
                            />
                        ))}
                </ScrollView>
            )}
        </View>
    );
}