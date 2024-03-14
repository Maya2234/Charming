import hug2 from './Pics/hug2.JPG'
import { useState } from 'react';
import AnimalShow from '../AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function Test(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]);
    };
  
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />;
  });
    return(
    <div>
        <div className="app">
            <button onClick={handleClick}></button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
        <html>
            <head>
            </head>
            <body>

            </body>
        </html>
    </div>
    );   
}
export default Test;