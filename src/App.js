import React from 'react';
import './App.css';
import Card from './components/Card';
import PoisonIvyimg from './components/imgs/poisonivy.jpg';
import Catwomanimg from './components/imgs/catwoman.jpg';
import HarleyQuinnimg from './components/imgs/harlequinn.jpg';


function App() {
  const villains = [
    {name: "Poison Ivy",
      img:  PoisonIvyimg,
      info: "infojasdjkjaskdas"
    },
    {
      name: "Catwoman",
      img: Catwomanimg,
      info: "dkjaslkdjaklsdjlaksjdlaskjdakljdals"

    },
    {
      name: "Harley Quinn",
      img: HarleyQuinnimg,
      info: "m,sdhkjshdkajsdhwiuhdm,asnd,ma"

    }
  ];
  return (
    <div>
        {villains.map(villain => {
          return <Card cardBckgrnd = {villain.img} villainName = {villain.name} villainInfo = {villain.info}></Card>
        })}
    </div>



  );
}

export default App;
