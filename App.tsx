import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeBtn } from './components/theme/themeBtn'
import store from './state/store'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          minHeight: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <StatusBar animated barStyle={'dark-content'} backgroundColor={'red'} />
        <ThemeBtn />
      </SafeAreaView>
    </Provider>
  )
}
