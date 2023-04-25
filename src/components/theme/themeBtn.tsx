import AsyncStorage from '@react-native-async-storage/async-storage'
import { ThemeActions } from '@src/state/reducers/theme.reducer'
import { useAppDispatch, useAppSelector } from '@src/state/store'
import { useIsReady } from '@src/utils/isReadyHook'
import { useCurrentTheme } from '@src/utils/themeHook'
import { FC, useEffect } from 'react'
import { Switch, View } from 'react-native'
import { COLORS } from '@src/common/colors'
import { CustomText } from '../text/custom-text'
import { styles } from './themeBtn.styles'

export const ThemeBtn: FC = () => {
  const dispatch = useAppDispatch()
  const ready = useIsReady()
  const themeInit = async () => {
    const val = await AsyncStorage.getItem('theme')
    dispatch(ThemeActions.setThemeInput((val as any) || 'light'))
  }
  useEffect(() => {
    if (!ready) return
    themeInit()
  }, [ready])
  const { currentTheme } = useAppSelector(s => s.theme)
  return (
    <View style={[styles.viewContent]}>
      <Switch
        value={currentTheme === 'light'}
        onValueChange={v => {
          dispatch(ThemeActions.setThemeInput(v ? 'light' : 'dark'))
        }}
      />
      <View>
        <CustomText style={styles.text}>{currentTheme || ''}</CustomText>
        <CustomText style={styles.text}>
          {useCurrentTheme(COLORS.light.text, COLORS.dark.text) || ''}
        </CustomText>
      </View>
    </View>
  )
}
