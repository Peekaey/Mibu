import { Image, Text, View } from "react-native";
import * as React from "react";
import { Link } from "expo-router";

export default function DiscoveryItem({ SourceImage, Title, Id }: any) {
    return (
        <>
            <Link href={"/anime/"+(Id??"")} style={{marginLeft: 4.5, marginBottom: 10}} >
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Image source={{ uri: SourceImage }} style={{ borderRadius: 10, width: 130, height: 180 }} />
                    <View style={{ width: 130 }}>
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>{Title}</Text>
                    </View>
                </View>
            </Link>
        </>
    );
}