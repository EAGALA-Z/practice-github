import Header from './component/Header'
import Footer from './component/Footer'
import Para from './component/para'
import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <div className="App">
        <h1>Welcome to Gupio</h1>
        <Para/>
      </div>
      <Footer />
    </>
  )
}

export default App
