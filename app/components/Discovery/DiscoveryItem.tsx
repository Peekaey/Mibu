import {Image, Text, View} from "react-native";
import * as React from "react";


export default function DiscoveryItem({ SourceImage, Title }) {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 2.5, marginBottom: 10 }}>
            <Image source={{ uri: SourceImage }} style={{ width: 130, height: 180, borderRadius: 10, marginRight: 10 }} />
            <View style={{ width: 130 }}>
                <Text style={{ marginTop: 5, textAlign: 'center' }}>{Title}</Text>
            </View>
        </View>
    );
}