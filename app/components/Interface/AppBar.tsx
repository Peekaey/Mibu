import { Link } from 'expo-router'
import * as React from 'react'
import { Platform } from 'react-native'
import { Appbar, Button, IconButton } from 'react-native-paper'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const AppBar = (props: { back?: any | null; title?: string; search?: any; more?: any }) => (
  <Appbar.Header style={{zIndex:2}}>
    {props.back ? <Appbar.BackAction disabled={!props.back} onPress={props.back} /> : null}
    {props.title? <Appbar.Content title={props.title} /> : null}
    <Link href={'search'}><IconButton icon={'magnify'} /></Link>
  </Appbar.Header>
)

export default AppBar
