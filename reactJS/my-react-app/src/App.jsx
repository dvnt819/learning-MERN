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

  const fruits = [{id:1, name:'apple' , calories: 'hello'},
                  {id:2, name:'banana' , calories: 110},
                  {id:3, name:'orange' , calories: 85} ,
                  {id:4, name:'watermelon' , calories: 150},
                  {id:5, name:'pineapple' , calories: 65}]

  const vegetables = [{id:6, name:'tometo' , calories: 90},
                      {id:7, name:'poteto' , calories: 75},
                      {id:8, name:'carrot' , calories: 130} ,
                      {id:9, name:'broccoli' , calories: 200},
                      {id:10, name:'cabbage' , calories: 115}]

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


        {fruits.length > 0 ? <List item={fruits} categorys="Fruits"/> : null}
        {vegetables.length > 0 ? <List item={vegetables} categorys="Vegetables"/> : null}
        
        <Footer></Footer>
    </div>
  );
}

export default App
