import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import BottomTabNavigator from './src/components/BottomTabNavigator'
import { FileContextProvider } from './src/context/FileContext'

export default function App() {
  return (
    <FileContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </FileContextProvider>
  )
}
