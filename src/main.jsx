import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
// import { Provider } from 'react-redux'
// import {store} from './Redux/store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
    {/* </Provider> */}
  </StrictMode>,
)
