import { Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Badge from './Badge';

export const AnimePoserMeta = ({ Id, titles, synonyms, ranking, attr }: any) => (
    <View style={styles.data}>
        <Text
            style={{
                textShadowColor: useTheme().colors.surface,
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 10,
                fontWeight: '800',
            }}
            numberOfLines={2}
            variant='titleMedium'
        >
            {titles?.romaji ?? titles?.english}
        </Text>
        {
            (synonyms)?(
                <Text numberOfLines={1} variant='bodyMedium'>
                    {synonyms[0]}
                </Text>
            ):''
        }
        <View style={{ padding: 5 }} />
        <Text variant='bodyMedium' style={styles.badge}>
            Type : <Badge>{attr?.type ?? 'NaN'}</Badge>
        </Text>
        <Text variant='bodyMedium' style={styles.badge}>
            Status : <Badge>{attr?.status ?? 'NaN'}</Badge>
        </Text>
        <Text variant='bodyMedium' style={styles.badge}>
            Popularity : <Badge>{attr?.popularity ?? 'NaN'}</Badge>
        </Text>
        <Text variant='bodyMedium' style={styles.badge}>
            Episodes Count : <Badge>{attr?.episodes ?? 'NaN'}</Badge>
        </Text>
        <Text variant='bodyMedium' style={styles.badge}>
            Start Date : <Badge>{attr?.startDate?.year??"year"} - {attr?.startDate?.month??"00"} - {attr?.startDate?.day??"00"}</Badge>
        </Text>
    </View>
);
const styles = StyleSheet.create({
    container: {
      zIndex: 2,
      // flex: 1,
      flexDirection: 'row',
      // justifyContent:'center',
      // alignContent: 'center',
      // alignItems: 'flex-start',
    },
    data: {
      paddingTop: 12,
      flex: 0.95,
    },
    badge: {
      // flex: 1,
      flexDirection: 'row',
      // justifyContent:'center',
      alignContent: 'center',
      alignItems: 'flex-start',
      marginVertical: 5,
    },
  })
  