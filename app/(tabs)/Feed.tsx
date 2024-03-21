import {ScrollView, View, RefreshControl, SafeAreaView} from "react-native";
import * as React from "react";


import DiscoveryGrid from "../components/Discovery/DiscoveryGrid";
import {
    AllTimePopularAnimeQuery,
    AllTimePopularMangaQuery,
    PopularAnimeThisSeasonQuery,
    PopularManhwaQuery,
    trendingAnimeQuery,
    trendingMangaQuery,
    UpcomingAnimeNextSeasonQuery
} from "../api/queries/DiscoveryQueries";

import {useState} from "react";
import { ActivityIndicator, Text, useTheme } from "react-native-paper";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import GetUser from "../api/Meta/GetUser";
import { GetGeneralUserData } from "../api/queries/CurrentUserQueries";

export default function Feed() {

    
  const GraphQLQuery = GetGeneralUserData;

  const { handleApiCall, apiData } = GetUser( GraphQLQuery, {} ) as any;
  const [isLoading, setIsLoading] = useState(true);
  const hasFetchedData = React.useRef(false);

  React.useEffect(() => {
      const fetchData = async () => {
          try {
              if (!hasFetchedData.current) {
                  await handleApiCall();
                  hasFetchedData.current = true;
                  setIsLoading(false);
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, [GraphQLQuery, handleApiCall, apiData]);

  if (isLoading) {
    return(
      <View style={{flex:1, margin:'auto', justifyContent:'center', alignItems:'center', alignContent:'center'}}>
        <ActivityIndicator/>
      </View>
    )
  }


    return (
        <SafeAreaView style={{marginTop:24, flex: 1, backgroundColor: useTheme().colors.background}}>
            <ScrollView  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <Text>Hello world</Text>
            </ScrollView>
        </SafeAreaView>
    )
}