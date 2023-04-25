import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import store from '@src/state/store'
import { useEffect, useState } from 'react'
import { Appearance } from 'react-native'

export const useCurrentTheme = (onLight: string, onDark: string) => {
  const { getItem } = useAsyncStorage('theme')
  const [themeStore, setthemeStore] = useState<string | null>(null)
  const [theme, settheme] = useState(Appearance.getColorScheme())
  const [isDark, setisDark] = useState(false)

  const getThemeFromStorage = async () => {
    const value = await getItem()
    setthemeStore(value)
  }

  useEffect(() => {
    Appearance.addChangeListener(v => settheme(v.colorScheme))
    getThemeFromStorage()
    store.subscribe(() => {
      setthemeStore(store.getState().theme.currentTheme)
    })
  }, [])

  useEffect(() => {
    setisDark(theme === 'dark')
  }, [theme])

  return themeStore
    ? themeStore === 'dark'
      ? onDark
      : onLight
    : isDark
    ? onDark
    : onLight

  // return themeStore === 'dark' ? onDark : onLight
}
