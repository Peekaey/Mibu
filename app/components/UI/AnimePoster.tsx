import { ImageBackground, View } from "react-native"
import { TouchableRipple, useTheme } from "react-native-paper"

export default function AnimePoser({source}:any) {
  return (
    <>
      <View style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: useTheme().colors.backdrop,
              width: 140,
              height: 229,
              borderRadius: useTheme().roundness * 2,
            }}
          >
            <ImageBackground
              imageStyle={{ borderRadius: useTheme().roundness * 2 }}
              style={{ flex: 1, justifyContent: 'center', borderRadius: useTheme().roundness * 2 }}
              src={source}
              resizeMode='cover'
            />
          </View>
      </View>
    </>
  )
}
