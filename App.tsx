import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
