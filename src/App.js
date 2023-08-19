import React, { useState } from 'react'
import Titlebar from './Titlebar';
import Data from "./Data";
import Card from './Card';
const App = () => {
  const [AllCards, setAllCards] = useState(Data)
 
  return (
    <>
      <Titlebar title="Best Movies/Webseries in React-JS" />
      <div className='CardArea'>

        {
          AllCards.map(
            (CurrentElement, Index) => {
              return (
                <Card
                  key={Index}
                  title={CurrentElement.title}
                  details={CurrentElement.details}
                  imgsrc={CurrentElement.imgsrc}
                  origin={CurrentElement.origin}

                />

              );
            }
          )
        }

      </div>
    </>
  );
}

export default App
