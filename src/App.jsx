import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import GlobalStyle from './global'
import { About } from './pages/About/About'
import { Projects } from './pages/Projects/Projects'
import { Footer } from './components/Footer/Footer'

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
    </Home>
    <About>
    </About>
    <Projects>      
    </Projects>
    <Footer>
    </Footer>
    </>
  )
}

export default App