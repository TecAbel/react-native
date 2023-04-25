import { FC } from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { COLORS } from '../../../common/colors'
import { ThemeBtn } from '../../../components/theme/themeBtn'
import { useCurrentTheme } from '@utils/themeHook'

export const HomePage: FC = () => {
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
      <ThemeBtn />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
