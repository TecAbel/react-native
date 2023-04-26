import AsyncStorage from '@react-native-async-storage/async-storage'
import store from '@src/state/store'
import { useEffect, useState } from 'react'

export const useIsDarkMode = () => {
  const [isDark, setisDark] = useState(false)
  const setthemeFromStorage = async () => {
    const theme: 'light' | 'dark' | null = (await AsyncStorage.getItem(
      'theme'
    )) as any
    setisDark(theme === 'dark')
  }

  useEffect(() => {
    setthemeFromStorage()
    store.subscribe(() => {
      const theme = store.getState().theme.currentTheme
      setisDark(theme === 'dark')
    })
  }, [])

  return isDark
}
