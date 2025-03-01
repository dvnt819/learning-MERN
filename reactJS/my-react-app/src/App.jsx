import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'

function App() {
  return(
    <div>
        <Header></Header>
        <Food></Food>
        <Footer></Footer>
    </div>
  );
}

export default App
