import { COLORS } from '@src/common/colors'
import { StyleSheet } from 'react-native'

export const formStyles = (isDark: boolean) =>
  StyleSheet.create({
    textInput: {
      backgroundColor: COLORS.dark.inputBg,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 999,
      color: COLORS.dark.bg,
      fontSize: 18
    },
    textError: {
      color: isDark ? COLORS.dark.error : COLORS.light.error,
      paddingLeft: 30,
      paddingTop: 10,
      fontSize: 18
    }
  })
