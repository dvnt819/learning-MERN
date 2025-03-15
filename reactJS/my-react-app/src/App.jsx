import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Button from './Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'

function App() {
  return(
    <div>
        <Header></Header>
        <Food></Food>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Button></Button>
        <Student name="Dhvanit" age={21} isStudent={false}/>
        <Student name="Dhrutmil" age={22} isStudent={false}/>
        <Student name="Dhruti" age={20} isStudent={true}/>
        <Student name="Deep" />
        <UserGreeting isLoggedIn={true} username="Dhvanit"/>
        <List></List>
        <Footer></Footer>
    </div>
  );
}

export default App
