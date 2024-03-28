import {Text, View} from "react-native";
import * as React from "react";
import { ScrollView, StyleSheet } from 'react-native';
import ActivityBox from "../components/Feed/FeedItem";
import { GetUserActivities } from "../api/queries/CurrentUserQueries";
import { useState, useEffect } from "react";
import { fetchUserActivities } from "../components/Feed/GetUserActivities";

export default function Feed() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
      fetchUserActivities()
          .then(fetchedActivities => {
              setActivities(fetchedActivities);
          })
          .catch(error => {
              console.error("Failed to fetch activities:", error);
          });
  }, []);

      const styles = StyleSheet.create({
        container: {
          padding: 10, // Add padding around the scroll view
        },
      });
    return (
      <ScrollView contentContainerStyle={styles.container}>
      {activities.map((activity, index) => (
          <ActivityBox 
              key={index} 
              name={activity.user.name} 
              content={activity.media.title.userPreferred} 
              status={activity.status}
              progress={activity.progress}
              sourceImage={activity.media.coverImage.medium}
          />
      ))}
  </ScrollView>
    );
}