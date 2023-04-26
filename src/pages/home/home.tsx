import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@src/common/colors'
import { Hellow } from '@src/components/hellow/hellow'
import { AppRoutes } from '@src/routes/routes.models'
import { useCurrentTheme } from '@utils/themeHook'
import { FC } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { styles } from './home.styles'

export const HomePage: FC = () => {
  const nav = useNavigation<any>()
  return (
    <SafeAreaView
      style={[
        styles.safe,
        {
          backgroundColor: useCurrentTheme(COLORS.light.bg, COLORS.dark.bg)
        }
      ]}
    >
      <StatusBar
        animated
        barStyle={useCurrentTheme('dark-content', 'light-content') as any}
        backgroundColor={'red'}
      />
      <View style={styles.container}>
        <Hellow />
        <TouchableOpacity
          onPress={() => {
            nav.navigate(AppRoutes.settings)
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Ir a Ajustes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nav.navigate(AppRoutes.formlogin)
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Ir a Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
