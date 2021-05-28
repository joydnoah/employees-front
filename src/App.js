import MainRouter from 'router/mainRouter'
import { Provider } from 'react-redux'
import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  )
}

export default App
