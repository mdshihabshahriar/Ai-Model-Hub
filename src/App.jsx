import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Models from './components/Models'
import NavBar from './components/Navbar'

const getModels = async ()=>{
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Models modelPromise={modelPromise}></Models>
      <Footer></Footer>
    </>
  )
}

export default App
