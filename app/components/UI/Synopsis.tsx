import { IconButton, Text, TouchableRipple, useTheme } from 'react-native-paper'
import { View } from 'react-native'
import { useState } from 'react'

export const Synopsis = ({ data }: any) => {
  const [collaps, setCollaps] = useState(true) as any
  return (
    <>
      {data ? (
        <View style={{ marginTop: 5 }}>
          <TouchableRipple
            style={{ paddingHorizontal: 10, paddingTop: 5 }}
            onPress={() => {
              setCollaps(!collaps)
            }}
            rippleColor='rgba(0, 0, 0, .32)'
          >
            <View style={{alignItems:'center'}}>
              <Text numberOfLines={collaps ? 3 : undefined} variant='bodyMedium'>
                {data.replace(/<br>/g,'').replace(/<i>/g,'').replace(/<\/i>/g,'')}
              </Text>
              <IconButton
                size={20}
                style={{ margin: 'auto' }}
                icon={collaps ? 'chevron-down' : 'chevron-up'}
              />
            </View>
          </TouchableRipple>
        </View>
      ) : (
        ''
      )}
    </>
  )
}
