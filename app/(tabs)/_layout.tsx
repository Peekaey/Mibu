import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomAvatar from "../components/NavigationHeader/Avatar";
import { Tabs } from 'expo-router';
import AnimeHome from "./AnimeHome";
import Feed from "./Feed";
import {TouchableOpacity, View} from "react-native";
export default function TabLayout() {
    return (
        <Tabs initialRouteName={"Feed"}
              screenOptions={{ tabBarActiveTintColor: '#e91e63', headerTitle:"",
                  headerRight: () => (
                      <View style={{ flexDirection: 'row' }}>
                          <CustomAvatar size={50} imageSource={null}/>
                      </View>
                  )}}  >
            <Tabs.Screen
                name="Feed"
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="newspaper-variant" color={color} />,
                }}
            />
            <Tabs.Screen
                name="MangaHome"
                options={{
                    title: 'Manga',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="book" color={color} />,
                }}
            />
            <Tabs.Screen
                name="AnimeHome"
                options={{
                    title: 'Anime',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="television" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Discovery"
                options={{
                    title: 'Discovery',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="magnify" color={color} />,
                }}
            />
        </Tabs>
    );
}