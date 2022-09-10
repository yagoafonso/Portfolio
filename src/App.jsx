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
        <Route path='/' element={<Home />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='about' element={<About />}/>
      </Routes>
    </Router>
    <Footer>
    </Footer>
    </>
  )
}

export default App
