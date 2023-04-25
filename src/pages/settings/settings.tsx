import { COLORS } from '@src/common/colors'
import { CustomText } from '@src/components/text/custom-text'
import { ThemeBtn } from '@src/components/theme/themeBtn'
import { useCurrentTheme } from '@src/utils/themeHook'
import { SafeAreaView, StatusBar, StatusBarStyle, View } from 'react-native'
import { styles } from './settings.style'

export const SettingsPage = () => {
  return (
    <SafeAreaView
      style={[
        styles.safe,
        { backgroundColor: useCurrentTheme(COLORS.light.bg, COLORS.dark.bg) }
      ]}
    >
      <StatusBar
        barStyle={
          useCurrentTheme('dark-content', 'light-content') as StatusBarStyle
        }
      />
      <View style={styles.container}>
        <CustomText style={styles.title}>Settings</CustomText>
        <View style={{ flexDirection: 'column' }}>
          <CustomText>Tema</CustomText>
          <View>
            <ThemeBtn />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
