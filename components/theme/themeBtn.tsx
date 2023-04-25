import { FC, useEffect, useState } from 'react'
import { View, Text, Switch, Appearance } from 'react-native'
import { ThemeActions } from '../../state/reducers/theme.reducer'
import { useAppDispatch, useAppSelector } from '../../state/store'
import { onThemeStyle } from '../../utils/theme'
import { styles } from './themeBtn.styles'

export const ThemeBtn: FC = () => {
  const [theme, settheme] = useState(Appearance.getColorScheme())
  useEffect(() => {
    Appearance.addChangeListener(v => settheme(v.colorScheme))
  }, [theme])
  const { currentTheme } = useAppSelector(s => s.theme)
  const dispatch = useAppDispatch()
  return (
    <View
      style={[
        styles.viewContent,
        { backgroundColor: onThemeStyle('red', 'blue') }
      ]}
    >
      <Switch
        value={currentTheme === 'light'}
        onValueChange={v => {
          dispatch(ThemeActions.setThemeInput(v ? 'light' : 'dark'))
        }}
      />
      <Text style={{ color: 'white', fontSize: 20 }}>{currentTheme}</Text>
    </View>
  )
}
