import { useTheme } from 'react-native-paper';
import { Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Head = ({ cover }: { cover: string }) => (
    <View style={{ marginTop: 0 }}>
        <Image
            style={{
                zIndex: 0,
                position: 'absolute',
                width: '100%',
                height: 120,
            }}
            src={cover??""} />
        <LinearGradient
            colors={[useTheme().colors.elevation.level1, useTheme().colors.elevation.level1]}
            style={{ zIndex: 1, opacity: 0.5, position: 'absolute', width: '100%', height: 200 }} />
        <LinearGradient
            colors={['transparent', useTheme().colors.elevation.level1]}
            style={{ zIndex: 1, position: 'absolute', width: '100%', height: 120 }} />
    </View>
);
