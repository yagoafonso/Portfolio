import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Button } from './components/Button/Button'
import GlobalStyle from './global'

function App() {

  return (
    <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='project' />
        <Route path='about' />
      </Routes>
    </Router>
    <Home>
      <Button>
        Ola
      </Button>
    </Home>
    </>
  )
}

export default App
