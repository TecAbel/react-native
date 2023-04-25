import { MainRouter } from '@src/routes/mainrouter'
import store from '@src/state/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  )
}
