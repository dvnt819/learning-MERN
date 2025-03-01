import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Button from './Button'

function App() {
  return(
    <div>
        <Header></Header>
        <Food></Food>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Button></Button>
        <Footer></Footer>
    </div>
  );
}

export default App
