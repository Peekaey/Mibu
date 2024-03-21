import { Text, TouchableRipple, useTheme } from 'react-native-paper'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'

export const EpisodeCard = ({ thumbnail, number, url, type }: any) => (
  <>
      <Link href={url}>
          <View
            style={{
              backgroundColor: useTheme().colors.backdrop,
              borderRadius: useTheme().roundness * 2,
              ...styles.card,
            }}
          >
            <ImageBackground
              imageStyle={{ borderRadius: useTheme().roundness * 2 }}
              style={{
                flex: 1,
                justifyContent: 'center',
                borderRadius: useTheme().roundness * 2,
              }}
              src={thumbnail??""}
              resizeMode='cover'
            >
              <LinearGradient
                colors={[useTheme().colors.primary, useTheme().colors.primary]}
                style={{
                  zIndex: 1,
                  opacity: 0.5,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius:useTheme().roundness*2
                }}
              />
              <Text variant='titleLarge' style={{ zIndex:2, textAlign:'center', fontWeight: '800', margin: 'auto', color:useTheme().colors.onPrimary }}>
                {number}
              </Text>
            </ImageBackground>
          </View>
      </Link>
  </>
)

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 90,
  },
})
