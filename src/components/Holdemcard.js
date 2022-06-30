import React from 'react'
import { Button, Card } from 'react-bootstrap'
import bg from '../assets/poker-Goodall/2B.svg';
import clubs2 from '../assets/poker-Goodall/2C.svg';

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../assets/poker-Goodall/', false, /\.(png|jpe?g|svg)$/));

for (var cardInd=[],i=1;i<53;++i) cardInd[i]=i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

cardInd = shuffle(cardInd);

var cardIndInd = 1;
function getNextCardIndInd() {
  cardIndInd += 1;
  return cardIndInd - 1;
}

const Holdemcard = () => {
  const [cardFrontSrc, setCardFrontSrc] = React.useState(images[0]);
  const [cardBackSrc, setCardBackSrc] = React.useState(images[cardInd[getNextCardIndInd()]]);

  function flipCard() {
    var temp = cardFrontSrc;
    setCardFrontSrc(cardBackSrc);
    setCardBackSrc(temp);
}

  return (
    <div onClick={flipCard}>
        <Card style={{ width: '5rem' }}>
        <Card.Img src={cardFrontSrc}/>
        </Card>
    </div>
  )
}

export default Holdemcard