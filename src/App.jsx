import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Models from './components/Models'
import NavBar from './components/Navbar'

const getModels = async ()=>{
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])
  // console.log(carts)

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "model" ? "bg-red-500 text-white" : "bg-transparent"}`} aria-label="Models" onClick={()=>{setActiveTab("model")}} defaultChecked/>
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "cart" ? "bg-red-500 text-white" : "bg-transparent"}`} aria-label={`Cart (${carts.length})`} onClick={()=>{setActiveTab("cart")}}/>
      </div>

      {activeTab === "model" ? <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models> : null}

      {activeTab === "cart" ? <Cart carts={carts} setCarts={setCarts}></Cart> : null}

      <Footer></Footer>
    </>
  )
}

export default App
