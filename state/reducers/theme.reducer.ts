import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
  currentTheme: 'dark' | 'light' | null
}

const initialState: ThemeState = {
  currentTheme: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLight: state => {
      state.currentTheme = 'light'
    },
    setDark: state => {
      state.currentTheme = 'dark'
    },
    setThemeInput: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.currentTheme = action.payload
    }
  }
})

export const ThemeActions = themeSlice.actions

export default themeSlice.reducer
