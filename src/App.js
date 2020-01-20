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
      info: `Poison Ivy is an enemy and lover of Batman. She is depicted as one of the world's most prominent eco-terrorists. She is obsessed with plants, botany, and environmentalism. She uses toxins from plants and her own bloodstream for her criminal activities, which are usually aimed at protecting the natural environment. She creates love potions that ensnare Batman, Superman, and other strong-willed individuals. Fellow villain Harley Quinn is her recurring partner-in-crime and possibly her only human friend.`
    },
    {
      name: "Catwoman",
      img: Catwomanimg,
      info: `Selina Kyle, also known as Catwoman, is a fictional character associated with DC Comics' Batman franchise and created by Bill Finger and Bob Kane. Currently portrayed as an orphan who learned to survive on Gotham City's streets, Selina took to thievery to survive... but determined to do it in style, she learned martial arts and trained extensively to perfect her skills in cat burglary. Her criminal activities are often tempered by a reluctant altruism, making her an inconstant villain and occasional ally to Batman. She regularly eludes capture by the Dark Knight and maintains a complicated, adversarial relationship with Batman that frequently turns flirtatious and occasionally, legitimately romantic. She's one of Batman's best known loves.`

    },
    {
      name: "Harley Quinn",
      img: HarleyQuinnimg,
      info: `Dr. Harleen Frances Quinzel, also known as Harley Quinn (a pun on the word "harlequin"), first appeared in the Batman: The Animated Series episode "Joker's Favor", where she served as a humorous female sidekick to the Joker. In her first appearances she was depicted as a character completely devoted to the Joker, totally oblivious to his psychotic nature and obvious lack of affection for her; this characterization has remained more or less consistent throughout her subsequent appearances.`

    }
  ];
  return (
    <section className="all">
        {villains.map(villain => {
          return <Card cardBckgrnd = {villain.img} villainName = {villain.name} villainInfo = {villain.info}></Card>
        })}
    </section>



  );
}

export default App;
