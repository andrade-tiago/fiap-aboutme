import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import GlobalStyle from './shared/GlobalStyle'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
