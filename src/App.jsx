import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import style from './Components/Css/Style.css'
import Banner from './Components/Banner'
import Store from './Components/Store'
import './Components/Css/store.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Collection from './Components/Collection'
import Brand from './Components/Brand'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Store/>
      <Collection/>
      <Brand/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
