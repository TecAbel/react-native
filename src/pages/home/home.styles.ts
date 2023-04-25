import { StyleSheet } from 'react-native'
import { COLORS } from '@src/common/colors'
export const styles = StyleSheet.create({
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
