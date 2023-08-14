import './App.scss'
import Cover from './components/Home/Cover'
import Discount from './components/Home/Discount'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Cover/>
        <Discount/>
      </main>
      <Footer/>
    </>
  )
}

export default App
