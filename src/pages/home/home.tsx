import { useNavigation } from '@react-navigation/native'
import { COLORS } from '@src/common/colors'
import { Hellow } from '@src/components/hellow/hellow'
import { useCurrentTheme } from '@utils/themeHook'
import { FC } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

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
            nav.navigate('settings')
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Ir a Ajustes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40
  },
  button: {
    backgroundColor: COLORS.light.green,
    width: 200,
    paddingHorizontal: 40,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.light.bg
  }
})
