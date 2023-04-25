import { Provider } from 'react-redux'
import { HomePage } from './src/pages/home/home'
import store from './state/store'

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}
