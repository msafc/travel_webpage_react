import React from 'react'

import { Aboutus, Contact, Destinations, Discover, Footer, Header, Newsletter, Opinions, Packages, Wherefind } from './containers'
import { Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Aboutus />
      <Destinations />
      <Packages />
      <Opinions />
      <Discover />
      <Wherefind />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}

export default App