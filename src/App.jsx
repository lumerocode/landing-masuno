import './App.scss'
import Cover from './components/Home/Cover'
import Discount from './components/Home/Discount'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'
import Tech from './components/Home/Tech'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Cover/>
        <Discount/>
        <Tech/>
      </main>
      <Footer/>
    </>
  )
}

export default App
