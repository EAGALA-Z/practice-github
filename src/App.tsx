import Header from './component/Header'
import Footer from './component/Footer'
import Para from './component/Smallpara'
import Para2 from './component/Paragraph'
import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <div className="App">
        <h1>Welcome Gupio</h1>
        <Para/>
        <Para2/>
      </div>
      <Footer />
    </>
  )
}

export default App
