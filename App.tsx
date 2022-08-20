import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { FileContextProvider } from './src/context'
import BottomTabNavigator from './src/navigation/BottomTabNavigator/BottomTabNavigator'

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
