import './App.css'
import HomePage from './HomePage/HomePage'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
