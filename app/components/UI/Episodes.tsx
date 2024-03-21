import { ActivityIndicator, Button, Card, Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { EpisodeCard } from './EpisodeCard'
import { GetAnimeEpisodesById } from '../../api/queries/DiscoveryQueries'
import GetAnime from '../../api/Meta/GetAnime'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export const Episodes = ({ id }: any) => {

    const GraphQLQuery = GetAnimeEpisodesById;

    const { handleApiCall, apiData } = GetAnime(GraphQLQuery, {
        id: id
    }) as any;
    const [isLoading, setIsLoading] = useState(true);
    const hasFetchedData = useRef(false);

    useEffect(() => {
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
        return (
            <View style={{ flex: 1, margin: 'auto', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <ActivityIndicator />
            </View>
        )
    }


    return (
        <>
            <View style={{flex:1, flexDirection:'row', flexWrap:'wrap', gap:10, paddingVertical:12, margin:'auto', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                {
                    apiData?.data?.Media?.streamingEpisodes?.map((item: any, i: number) => (
                        <EpisodeCard key={i} number={item?.title?.split(' - ')[0]} thumbnail={item?.thumbnail} url={item?.url} />
                    ))
                }
                {
                    !apiData?.data?.Media?.streamingEpisodes?.length?(
                        <Card onPress={()=>{}} style={{width:'90%'}}>
                            <Card.Content>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                <MaterialCommunityIcons size={30} name='crosshairs' />
                                <Text variant='titleSmall' style={{textAlign:'center', marginTop:10}}>
                                    There no Episodes for this anime
                                </Text>
                                </View>
                            </Card.Content>
                        </Card>
                    ):''
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cont: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        marginBottom: 20,
    },
})
