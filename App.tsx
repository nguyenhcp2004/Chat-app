import AppLoading from 'expo-app-loading'
import { HomeScreen } from './src/screens'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar hidden />
        <HomeScreen />
      </>
    )
  }
}
