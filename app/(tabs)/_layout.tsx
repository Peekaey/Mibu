import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { BottomBarPaper } from '../../layout/BottomBarPaper'

export const unstable_settings = {
  initialRouteName: 'index',
}

export default function Layout() {
  return (
    <>
      <BottomBarPaper
        safeAreaInsets={{ bottom: 0 }}
        screenOptions={
          {
            // API Reference: https://reactnavigation.org/docs/material-bottom-tab-navigator#options
          }
        }
      >
      <BottomBarPaper.Screen
        name='Feed'
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                color={props.color}
                size={24}
                name={props.focused ? 'rss-box' : 'rss'}
              />
            )
          },
        }}
      />
      <BottomBarPaper.Screen
        name='AnimeHome'
        options={{
          tabBarLabel: 'Anime',
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                color={props.color}
                size={24}
                name={props.focused ? 'youtube-tv' :'television'}
              />
            )
          },
        }}
      />
      <BottomBarPaper.Screen
        name='MangaHome'
        options={{
          tabBarLabel: 'Manga',
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                color={props.color}
                size={24}
                name={props.focused ? 'book' : 'book-outline'}
              />
            )
          },
        }}
      />
      <BottomBarPaper.Screen
        name='Discovery'
        options={{
          tabBarLabel: 'Discovery',
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                color={props.color}
                size={24}
                name={props.focused ? 'account-supervisor-circle' : 'account-supervisor-circle-outline'}
              />
            )
          },
        }}
      />
      </BottomBarPaper>
    </>
  )
}
