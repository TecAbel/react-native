import { COLORS } from '@src/common/colors'
import { CustomText } from '@src/components/text/custom-text'
import { useCurrentTheme } from '@src/utils/themeHook'
import { SafeAreaView, View } from 'react-native'
import { styles } from './form-login.styles'

export const FormLoginPage = () => {
  return (
    <SafeAreaView
      style={[
        styles.safe,
        { backgroundColor: useCurrentTheme(COLORS.light.bg, COLORS.dark.bg) }
      ]}
    >
      <View style={[styles.mainContainer]}>
        <View style={{ gap: 15 }}>
          <CustomText style={styles.title}>Bienvenido</CustomText>
          <CustomText>
            Para ingresar, es necesario usuario y contraseña
          </CustomText>
        </View>
      </View>
    </SafeAreaView>
  )
}
