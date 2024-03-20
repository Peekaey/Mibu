import { Chip } from 'react-native-paper';
import { ScrollView, View } from 'react-native';

export const ExtraInfo = ({ attr }: any) => (
    <View style={{ flexDirection: 'row', gap: 10, paddingLeft: 10 }}>
        {
            attr?.averageScore?(
                <Chip icon='star' onPress={() => { }}>
                    {Math.floor(attr?.averageScore) ?? 0}%
                </Chip>
            ):''
        }
        <Chip icon='arrow-top-right-thick' onPress={() => { }}>
            {attr?.popularity ?? 0}
        </Chip>
        <Chip icon='heart' onPress={() => { }}>
            {attr?.favourites ?? 0}
        </Chip>
        {
            attr?.isAdult?(
                <Chip icon='account' onPress={() => { }}>
                    Adult
                </Chip>
            ):''
        }
    </View>
);
