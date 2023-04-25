import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from '@pages/home/home'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SettingsPage } from '@src/pages/settings/settings'
import { useCurrentTheme } from '@src/utils/themeHook'
import { COLORS } from '@src/common/colors'
import { FormLoginPage } from '@src/pages/forms/login/form-login'

const Stack = createNativeStackNavigator()
export enum AppRoutes {
  settings = 'settings',
  home = 'home',
  formlogin = 'form-login'
}
export const MainRouter = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: useCurrentTheme(COLORS.light.bg, COLORS.dark.bg)
            },
            headerTitleStyle: {
              color: useCurrentTheme(COLORS.light.text, COLORS.dark.text)
            }
          }}
        >
          <Stack.Screen
            name={AppRoutes.home}
            component={HomePage}
            options={{ title: 'home', headerShown: false }}
          />
          <Stack.Screen
            name={AppRoutes.settings}
            component={SettingsPage}
            options={{
              title: 'Ajustes'
            }}
          />
          <Stack.Screen
            name={AppRoutes.formlogin}
            component={FormLoginPage}
            options={{ title: 'form-login' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
