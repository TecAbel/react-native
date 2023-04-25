import { Appearance } from 'react-native'

export const onThemeStyle = (onLight: string, onDark: string) => {
  const theme = Appearance.getColorScheme()
  const isDarkMode = theme === 'dark'

  return isDarkMode ? onDark : onLight
}
