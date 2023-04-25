import { HomePage } from '@src/pages/home/home'
import store from '@src/state/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}
