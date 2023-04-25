import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from '@src/pages/home/home'
import store from '@src/state/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomePage}
            options={{ title: 'home' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <HomePage />
    </Provider>
  )
}
