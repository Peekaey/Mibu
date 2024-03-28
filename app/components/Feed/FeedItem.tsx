import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ActivityBox({
  name,
  content,
  status,
  progress,
  sourceImage,
}) {
  console.log(sourceImage);

  return (
    <View style={styles.box}>
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        {status && progress ? (
          <Text>
            {status} {progress} of
          </Text>
        ) : (
          <Text>{status} </Text>
        )}
        <Text>{content}</Text>
      </View>
      {sourceImage && (
        <Image source={{ uri: sourceImage }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    flexDirection: 'row'
  },
  text :{
    paddingRight: 50,
    justifyContent: 'center'
  },
  name: {
    fontWeight: "bold"
  },
  image: {
    width: 50,
    height: 70, 
    resizeMode: "contain", 
    marginLeft: "auto"
  },
});
