import {ScrollView, Text, View, RefreshControl} from "react-native";
import * as React from "react";


import DiscoveryGrid from "../components/Discovery/DiscoveryGrid";
import {trendingAnimeQuery} from "../api/Discovery/queries/CurrentlyTrendingAnime";
import {PopularAnimeThisSeasonQuery} from "../api/Discovery/queries/PopularAnimeThisSeason";
import {UpcomingAnimeNextSeasonQuery} from "../api/Discovery/queries/UpcomingAnimeNextSeason";
import {AllTimePopularAnimeQuery} from "../api/Discovery/queries/AllTimePopularAnime";
import {trendingMangaQuery} from "../api/Discovery/queries/CurrentlyTrendingManga";
import {AllTimePopularMangaQuery} from "../api/Discovery/queries/AllTimePopularManga";
import {PopularManhwaQuery} from "../api/Discovery/queries/PopularManhwa";

import {useState} from "react";

export default function Discovery() {
    var CurrentSeason = "Winter 2024";
    var UpcomingSeason = "Spring 2024";

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {

        setRefreshing(true);

        // Simulate an asynchronous data fetching process
        // TODO - Implement actual functionality to Refresh GridData - May Need a Rewrite
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <View style={{flex: 1}}>
            <ScrollView  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <Text style={{textAlign: 'left', marginVertical: 10, marginLeft: 5}}>Now Trending Anime</Text>
                <DiscoveryGrid GraphQLQuery={trendingAnimeQuery}/>
                <Text style={{textAlign: 'left', marginVertical: 10, marginLeft: 5}}>Popular Anime This Season - {CurrentSeason}</Text>
                <DiscoveryGrid GraphQLQuery={PopularAnimeThisSeasonQuery}/>

                <Text style={{textAlign: 'left', marginVertical: 10, marginLeft: 5}}>Upcoming Anime Next Season - {UpcomingSeason}</Text>
                <DiscoveryGrid GraphQLQuery={UpcomingAnimeNextSeasonQuery}/>
                <Text style={{textAlign: 'left', marginVertical: 10, marginLeft: 5}}>All Time Popular Anime</Text>
                <DiscoveryGrid GraphQLQuery={AllTimePopularAnimeQuery}/>
                {/*End Of Anime Lists - Manga Lists Below*/}
                <Text style={{textAlign: 'left', marginVertical: 10, marginLeft: 5}}>Now Trending Manga</Text>
                <DiscoveryGrid GraphQLQuery={trendingMangaQuery}/>
                <Text style={{textAlign: 'left', marginVertical: 10, marginLeft: 5}}>All Time Popular Manga</Text>
                <DiscoveryGrid GraphQLQuery={AllTimePopularMangaQuery}/>

                <Text style={{textAlign: 'left', marginVertical: 10, marginLeft: 5}}>Popular Manhwa</Text>
                <DiscoveryGrid GraphQLQuery={PopularManhwaQuery}/>
            </ScrollView>
        </View>
    )
}