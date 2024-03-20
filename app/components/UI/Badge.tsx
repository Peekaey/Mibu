import { StyleSheet, Text } from 'react-native'
import { TouchableRipple, useTheme } from 'react-native-paper'

export default function Badge({children}:any) {
  const theme = useTheme()
  return (
    <>
      <TouchableRipple style={{position:'absolute', right:0}} rippleColor="rgba(0, 0, 0, .32)">
        <Text
          style={{
            borderRadius: theme.roundness,
            backgroundColor: theme.colors.primary,
            color: theme.colors.onPrimary,
            fontSize: 13,
            ...styles.main,
          }}
        >
          {children??"TV"}
        </Text>
      </TouchableRipple>
    </>
  )
}
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 4,
    paddingVertical: 0,
  },
})
