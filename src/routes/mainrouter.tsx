import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from '@pages/home/home'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SettingsPage } from '@src/pages/settings/settings'
import { useCurrentTheme } from '@src/utils/themeHook'
import { COLORS } from '@src/common/colors'

const Stack = createNativeStackNavigator()
export const MainRouter = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomePage}
            options={{ title: 'home', headerShown: false }}
          />
          <Stack.Screen
            name="settings"
            component={SettingsPage}
            options={{
              title: 'Ajustes',
              headerStyle: {
                backgroundColor: useCurrentTheme(
                  COLORS.light.bg,
                  COLORS.dark.bg
                )
              },
              headerTitleStyle: {
                color: useCurrentTheme(COLORS.light.text, COLORS.dark.text)
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
